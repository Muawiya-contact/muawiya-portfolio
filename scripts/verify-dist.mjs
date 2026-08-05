// Verifies that a production build in dist/ is actually deployable.
//
//   npm run verify:dist        (after npm run build)
//
// This exists because the failure it catches is invisible locally. The site is
// served from a sub-path on GitHub Pages (vite.config.js sets
// base: '/muawiya-portfolio/'), so a root-absolute reference like
// "/favicon.png" loads fine from a dev server at the root but 404s once
// deployed under the base. `vite build` does not flag it -- the HTML is valid,
// the file just is not where the URL says it is.
//
// Checks, all against the real emitted files:
//   1. dist/index.html exists and is non-empty
//   2. every local href/src in it is prefixed with the configured base
//   3. every such reference resolves to a file that exists on disk
//   4. the web manifest's icon entries resolve too

import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const errors = []
const notes = []

// Read the deployed base straight from vite.config.js so the two cannot drift.
const viteConfig = readFileSync(join(root, 'vite.config.js'), 'utf8')
const baseMatch = viteConfig.match(/base:\s*['"`]([^'"`]+)['"`]/)
const base = baseMatch ? baseMatch[1] : '/'
notes.push(`configured base: ${base}`)

const indexPath = join(dist, 'index.html')
if (!existsSync(indexPath)) {
  console.error('✗ dist/index.html is missing. Run `npm run build` first.')
  process.exit(1)
}

const html = readFileSync(indexPath, 'utf8')
if (html.trim().length === 0) errors.push('dist/index.html is empty')

// Collect href="..." and src="..." values from the built HTML.
const refs = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((m) => m[1])

const isExternal = (u) =>
  /^(https?:)?\/\//.test(u) || u.startsWith('data:') || u.startsWith('mailto:')

// Map a URL as the browser would resolve it, to a path inside dist/.
const toDistPath = (url) => {
  const clean = url.split(/[?#]/)[0]
  if (clean.startsWith(base)) return join(dist, clean.slice(base.length))
  if (clean.startsWith('./')) return join(dist, clean.slice(2))
  if (clean.startsWith('/')) return null // root-absolute: escapes the base
  return join(dist, clean)
}

let checked = 0
for (const ref of refs) {
  if (isExternal(ref) || ref.startsWith('#')) continue
  checked++

  const clean = ref.split(/[?#]/)[0]

  // A root-absolute path that does not carry the base resolves above the
  // deployment root and 404s in production.
  if (base !== '/' && clean.startsWith('/') && !clean.startsWith(base)) {
    errors.push(`"${ref}" is root-absolute and misses the base "${base}" — 404 once deployed`)
    continue
  }

  const target = toDistPath(ref)
  if (!target || !existsSync(target)) {
    errors.push(`"${ref}" does not resolve to a file in dist/`)
  }
}
notes.push(`checked ${checked} local references in index.html`)

// The manifest ships its own icon URLs, which never pass through the bundler.
const manifestPath = join(dist, 'site.webmanifest')
if (existsSync(manifestPath)) {
  let manifest
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  } catch (e) {
    errors.push(`site.webmanifest is not valid JSON: ${e.message}`)
  }
  for (const icon of manifest?.icons ?? []) {
    if (!icon.src || isExternal(icon.src)) continue
    const target = toDistPath(icon.src)
    if (!target || !existsSync(target)) {
      errors.push(`manifest icon "${icon.src}" does not resolve to a file in dist/`)
    }
  }
  notes.push(`checked ${manifest?.icons?.length ?? 0} manifest icon(s)`)
}

for (const n of notes) console.log(`  ${n}`)

if (errors.length > 0) {
  console.error(`\n✗ dist/ is not deployable — ${errors.length} problem(s):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

console.log('\n✓ dist/ is deployable: every reference carries the base and resolves on disk.')
