import { useState, useEffect } from 'react'
import { data } from '../data'
import { useActiveSection, useScrollProgress } from '../hooks/useInView'
import { ScrollProgress } from './UI'
import styles from './Navbar.module.css'

const sectionIds = ['hero', ...data.nav.map((n) => n.id)]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = useScrollProgress()
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <ScrollProgress progress={progress} />
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          M<span>.</span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {data.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${data.email}`}
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            email me
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.line1open : styles.line1} />
          <span className={menuOpen ? styles.line2open : styles.line2} />
          <span className={menuOpen ? styles.line3open : styles.line3} />
        </button>
      </nav>
    </>
  )
}
