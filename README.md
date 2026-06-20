# Muawiya Amir — Portfolio

Personal portfolio site built with React + Vite. Sections: about, experience,
skills, projects, open source, and contact, plus a downloadable résumé.

## Local development

```bash
npm install
npm run dev      # open the URL Vite prints (it includes the /muawiya-portfolio/ base)
```

Build and preview the production output locally:

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push this project to the `main` branch of the `muawiya-portfolio` repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and select **GitHub Actions** (one-time setting).
3. Every push to `main` builds the site and publishes it automatically.

The site is served from `https://<user>.github.io/muawiya-portfolio/`, which is
why `vite.config.js` sets `base: '/muawiya-portfolio/'`. If you rename the repo,
update that `base` value to match.

## Updating content

Almost everything (text, links, projects, experience, skills) lives in
`src/data.js`. The résumé PDF is at `public/Muawiya-Amir-Resume.pdf`.
