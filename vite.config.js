import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const resumeVersion = createHash('sha256')
  .update(readFileSync(new URL('./public/Muawiya-Amir-Resume.pdf', import.meta.url)))
  .digest('hex')
  .slice(0, 12)

export default defineConfig({
  plugins: [react()],
  base: '/muawiya-portfolio/',
  define: {
    'import.meta.env.VITE_RESUME_VERSION': JSON.stringify(resumeVersion),
  },
})
