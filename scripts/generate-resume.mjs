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
const repoPath = (link) => bare(link).replace(/^github\.com\//, '')

function buildHtml() {
  const { resumeContent: r } = data

  // Title and dates share a row, dates flush right. A two-cell flex row keeps
  // the extracted text order as "<role, org> <dates>", which parsers handle.
  const experience = data.experience
    .map((job) => {
      const points = r.points[job.org] ?? job.points
      return `
    <div class="entry">
      <div class="row">
        <span class="rowMain"><strong>${esc(job.role)}</strong>, ${esc(job.org)}</span>
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
    .map((o) => `<li><strong>${esc(repoPath(o.link))}</strong> — ${esc(o.desc)}</li>`)
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
    data.location,
    r.phone,
    data.email,
    bare(data.links.github),
    bare(data.links.linkedin),
  ]
    .map(esc)
    .join(' &nbsp;|&nbsp; ')

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
