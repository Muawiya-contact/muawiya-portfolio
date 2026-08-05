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

const list = (items, cls = '') =>
  `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

// The site links to a repo; the resume prints the org/repo path instead, since
// a printed URL is only useful if it is readable.
const repoPath = (link) => bare(link).replace(/^github\.com\//, '')

function buildHtml() {
  const { resumeContent: r } = data

  const experience = data.experience
    .map((job) => {
      const points = r.points[job.org] ?? job.points
      return `
      <article class="job">
        <div class="jobHead">
          <h3>${esc(job.role)} · <span class="org">${esc(job.org)}</span></h3>
          <span class="period">${esc(job.period)}</span>
        </div>
        ${list(points)}
      </article>`
    })
    .join('')

  const education = data.education
    .map(
      (e) => `
      <div class="edu">
        <strong>${esc(e.degree)}</strong>
        <span>${esc(e.institute)}${e.cgpa ? ` · CGPA ${esc(e.cgpa)}` : ''}</span>
      </div>`,
    )
    .join('')

  const projects = data.projects
    .map(
      (p) => `
      <div class="proj">
        <strong>${esc(p.name)}</strong>
        <p>${esc(p.desc)}</p>
      </div>`,
    )
    .join('')

  const openSource = data.openSource
    .map((o) => `<li><strong>${esc(repoPath(o.link))}</strong> — ${esc(o.desc)}</li>`)
    .join('')

  const skills = data.skills
    .map(
      (s) => `
      <div class="skillGroup">
        <span class="skillLabel">${esc(s.category)}</span>
        <div class="chips">${s.items.map((i) => `<span>${esc(i)}</span>`).join('')}</div>
      </div>`,
    )
    .join('')

  const [first, ...rest] = data.name.split(' ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(data.name)} — Résumé</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #0f2038;
    --ink: #1b2a3d;
    --body: #3d4a5c;
    --accent: #2f6fd0;
    --rule: #d8e0ea;
    --sidebar-w: 68mm;
  }

  body {
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 8.6pt;
    line-height: 1.45;
    color: var(--body);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .sidebar {
    position: fixed;
    top: 0; left: 0;
    width: var(--sidebar-w);
    height: 297mm;
    background: var(--navy);
    color: #c7d4e4;
    padding: 11mm 7mm;
    overflow: hidden;
  }
  .main { margin-left: var(--sidebar-w); padding: 13mm 11mm 13mm 9mm; }

  .name { font-size: 21pt; line-height: 1.05; font-weight: 700; color: #fff; }
  .role { margin-top: 3mm; font-size: 8pt; color: #91a6c0; }

  .sideHead {
    margin: 4.6mm 0 2mm;
    font-size: 7.2pt; font-weight: 700;
    letter-spacing: 0.13em; text-transform: uppercase;
    color: #6f8db5;
    border-top: 1px solid rgba(255,255,255,0.13);
    padding-top: 2.4mm;
  }
  .contact div { margin-bottom: 1.1mm; word-break: break-word; }

  .skillGroup { margin-bottom: 2mm; }
  .skillLabel { font-size: 6.9pt; color: #8fa6c2; }
  .chips { margin-top: 1mm; display: flex; flex-wrap: wrap; gap: 1mm; }
  .chips span {
    font-size: 6.6pt;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 2px;
    padding: 0.4mm 1.2mm;
    color: #d5e1f0;
  }

  .sidebar ul { list-style: none; }
  .sidebar li { margin-bottom: 1.1mm; padding-left: 2.6mm; position: relative; font-size: 7.4pt; }
  .sidebar li::before {
    content: ''; position: absolute; left: 0; top: 1.5mm;
    width: 1.1mm; height: 1.1mm; border-radius: 50%; background: var(--accent);
  }

  h2 {
    font-size: 8.4pt; font-weight: 700;
    letter-spacing: 0.11em; text-transform: uppercase;
    color: var(--accent);
    border-bottom: 1px solid var(--rule);
    padding-bottom: 1.4mm;
    margin: 5.5mm 0 2.6mm;
  }
  h2:first-of-type { margin-top: 0; }

  .job { margin-bottom: 3.2mm; }
  .jobHead { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
  .jobHead h3 { font-size: 9.2pt; color: var(--ink); font-weight: 700; }
  .org { color: var(--accent); }
  .period { font-size: 7.4pt; color: #7c8a9c; font-style: italic; white-space: nowrap; }

  .main ul { margin-top: 1.2mm; list-style: none; }
  .main li { position: relative; padding-left: 3.2mm; margin-bottom: 0.9mm; }
  .main li::before {
    content: ''; position: absolute; left: 0.6mm; top: 1.6mm;
    width: 1mm; height: 1mm; border-radius: 50%; background: var(--accent);
  }

  .edu { margin-bottom: 2mm; }
  .edu strong { display: block; font-size: 8.8pt; color: var(--ink); }
  .edu span { font-size: 7.8pt; }

  .proj { margin-bottom: 1.9mm; }
  .proj strong { color: var(--accent); font-size: 8.6pt; }
  .proj p { font-size: 7.9pt; }
</style>
</head>
<body>
  <aside class="sidebar">
    <div class="name">${esc(first)}<br>${esc(rest.join(' '))}</div>
    <div class="role">${esc(r.title)}</div>

    <div class="sideHead">Contact</div>
    <div class="contact">
      <div>${esc(data.location)}</div>
      <div>${esc(r.phone)}</div>
      <div>${esc(data.email)}</div>
      <div>${esc(bare(data.links.linkedin))}</div>
      <div>${esc(bare(data.links.github))}</div>
      <div>${esc(bare(data.links.leetcode))}</div>
    </div>

    <div class="sideHead">Skills</div>
    ${skills}

    <div class="sideHead">Certifications</div>
    ${list(r.certifications)}

    <div class="sideHead">Competitive Programming</div>
    <div style="font-size:7.6pt">${esc(r.competitive)}</div>

    <div class="sideHead">Interests</div>
    ${list(r.interests)}
  </aside>

  <main class="main">
    <h2>Professional Summary</h2>
    <p>${esc(r.summary)}</p>

    <h2>Experience</h2>
    ${experience}

    <h2>Education</h2>
    ${education}

    <h2>Key Projects</h2>
    ${projects}

    <h2>Selected Open-Source Contributions</h2>
    <ul>${openSource}</ul>
  </main>
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
