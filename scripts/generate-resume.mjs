// Renders public/Muawiya-Amir-Resume.pdf from src/data.js.
//
// The previous PDF was produced by wkhtmltopdf from an HTML file that was never
// committed, so the resume drifted out of sync with the site every time data.js
// changed. This script closes that gap: every string below comes from data.js.
//
//   npm run resume:pdf
//
// Rendering goes through headless Chrome (or Edge) --print-to-pdf, which is
// already present on every machine this repo gets built on. No new dependency.
//
// LAYOUT: deliberately single-column and plain. Applicant tracking systems
// (Greenhouse, Lever, Workday) parse top-to-bottom and routinely garble
// multi-column resumes by interleaving the sidebar into the body text. Keep it
// this way: no sidebars, no floats, no text in shapes, no images, standard
// section headings, and skills as comma-separated text rather than badges.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { data } from '../src/data.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(root, 'public', 'Muawiya-Amir-Resume.pdf')

// Chrome renders `--print-to-pdf` from the first candidate that exists.
const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
]

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const bare = (url) => String(url).replace(/^https?:\/\//, '').replace(/\/$/, '')

// The site links to a repo; the resume prints the org/repo path instead, since
// a printed URL is only useful if it is readable.
const repoPath = (url) => bare(url).replace(/^github\.com\//, '')

const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`

// Where a printed label and its real URL diverge. data.js points the drt-hub
// entry at a PR search, and crowd.dev's canonical repo moved to the crowd-dev
// org while the project is still known by the Linux Foundation path we print.
const REPO_URLS = {
  'drt-hub/drt': 'https://github.com/drt-hub/drt',
  'linuxfoundation/crowd.dev': 'https://github.com/crowd-dev/crowd.dev',
}

// The visible label stays the full literal org/repo path, so an ATS reading
// text-only still gets a parseable string.
const repoLink = (path) => link(REPO_URLS[path] ?? `https://github.com/${path}`, path)

// Inline so the PDF stays self-contained; no external image request.
const GITHUB_ICON =
  '<svg class="ghIcon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" ' +
  'd="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49' +
  '-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82' +
  '.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15' +
  '-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82' +
  '.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07' +
  '-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>'

function buildHtml() {
  const { resumeContent: r } = data

  // Title and dates share a row, dates flush right. A two-cell flex row keeps
  // the extracted text order as "<role, org> <dates>", which parsers handle.
  const experience = data.experience
    .map((job) => {
      const points = r.points[job.org] ?? job.points
      const orgHref = REPO_URLS[job.org] ?? job.link
      const org = orgHref ? link(orgHref, job.org) : esc(job.org)
      return `
    <div class="entry">
      <div class="row">
        <span class="rowMain"><strong>${esc(job.role)}</strong>, ${org}</span>
        <span class="rowDate">${esc(job.period)}</span>
      </div>
      <ul>${points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`
    })
    .join('')

  // CGPA is intentionally not printed.
  const education = data.education
    .map(
      (e) => `
    <div class="entry">
      <div class="row">
        <span class="rowMain"><strong>${esc(e.degree)}</strong></span>
      </div>
      <div class="sub">${esc(e.institute)}</div>
    </div>`,
    )
    .join('')

  const projects = data.projects
    .map(
      (p) => `
    <div class="entry">
      <div class="sub"><strong>${esc(p.name)}</strong> — ${esc(p.desc)}</div>
    </div>`,
    )
    .join('')

  const openSource = data.openSource
    .map((o) => `<li><strong>${repoLink(repoPath(o.link))}</strong> — ${esc(o.desc)}</li>`)
    .join('')

  // "Languages: Python, C / C++, ..." — plain text, no badges.
  const skills = data.skills
    .map(
      (s) =>
        `<div class="skillLine"><strong>${esc(s.category)}:</strong> ${esc(
          s.items.join(', '),
        )}</div>`,
    )
    .join('')

  const contact = [
    esc(data.location),
    esc(r.phone),
    link(`mailto:${data.email}`, data.email),
    GITHUB_ICON + link(data.links.github, bare(data.links.github)),
    link(data.links.linkedin, bare(data.links.linkedin)),
  ].join(' &nbsp;|&nbsp; ')

  const certs = [...r.certifications, r.competitive]
    .map((c) => `<li>${esc(c)}</li>`)
    .join('')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(data.name)} — Résumé</title>
<style>
  @page { size: A4; margin: 10mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: Calibri, "Segoe UI", Arial, sans-serif;
    font-size: 9.6pt;
    line-height: 1.24;
    color: #000;
  }

  header { text-align: center; margin-bottom: 2.4mm; }
  h1 {
    font-size: 17pt;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 0.6mm;
  }
  .role { font-size: 10pt; margin-bottom: 1.1mm; }
  .contact { font-size: 8.8pt; }

  /* Clickable but visually plain: an ATS reads the label text either way, and
     blue underlines would fight the rest of the page. */
  a { color: inherit; text-decoration: none; }

  .ghIcon {
    width: 1em; height: 1em;
    vertical-align: -0.14em;
    margin-right: 0.25em;
  }

  h2 {
    font-size: 10pt;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
    padding-bottom: 0.6mm;
    margin: 2.8mm 0 1.4mm;
    /* Never strand a heading at the foot of a page. */
    page-break-after: avoid;
  }

  /* Keep a role with its first bullets, and a degree with its institute. */
  .entry { margin-bottom: 1.7mm; page-break-inside: avoid; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 6mm; }
  .rowMain { font-size: 10pt; }
  .rowDate { font-size: 9.2pt; white-space: nowrap; }
  .sub { font-size: 9.4pt; }

  ul { margin: 0.6mm 0 0 4.6mm; }
  li { margin-bottom: 0.5mm; padding-left: 0.5mm; }

  .skillLine { margin-bottom: 0.8mm; font-size: 9.5pt; }

  p { text-align: justify; }
</style>
</head>
<body>
  <header>
    <h1>${esc(data.name)}</h1>
    <div class="role">${esc(r.title)}</div>
    <div class="contact">${contact}</div>
  </header>

  <h2>Professional Summary</h2>
  <p>${esc(r.summary)}</p>

  <h2>Technical Skills</h2>
  ${skills}

  <h2>Professional Experience</h2>
  ${experience}

  <h2>Projects</h2>
  ${projects}

  <h2>Open-Source Contributions</h2>
  <ul>${openSource}</ul>

  <h2>Education</h2>
  ${education}

  <h2>Certifications &amp; Competitive Programming</h2>
  <ul>${certs}</ul>
</body>
</html>`
}

function render(html) {
  const browser = BROWSERS.find((b) => existsSync(b))
  if (!browser) {
    throw new Error(
      `No Chrome or Edge binary found. Looked in:\n  ${BROWSERS.join('\n  ')}`,
    )
  }

  const tmp = mkdtempSync(join(tmpdir(), 'resume-'))
  const htmlPath = join(tmp, 'resume.html')
  const pdfPath = join(tmp, 'resume.pdf')

  try {
    writeFileSync(htmlPath, html, 'utf8')
    execFileSync(
      browser,
      [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        new URL(`file:///${htmlPath.replace(/\\/g, '/')}`).href,
      ],
      { stdio: 'pipe' },
    )

    if (!existsSync(pdfPath)) throw new Error('Chrome exited without writing a PDF.')
    writeFileSync(OUT, readFileSync(pdfPath))
    return browser
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

const browser = render(buildHtml())
const kb = (readFileSync(OUT).length / 1024).toFixed(1)
console.log(`✓ ${OUT}  (${kb} KB)`)
console.log(`  rendered by ${browser}`)
console.log(
  `  ${data.experience.length} roles · ${data.projects.length} projects · ${data.openSource.length} OSS entries`,
)
