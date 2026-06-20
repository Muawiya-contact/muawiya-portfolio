import { data } from '../data'
import styles from './Hero.module.css'

const levelColors = ['', styles.l1, styles.l2, styles.l3, styles.l4]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <p className={styles.status}>
            <span className={styles.dot} />
            {data.hero.status}
          </p>

          <h1 className={styles.name}>
            Muawiya
            <br />
            <span className={styles.last}>Amir</span>
          </h1>

          <p className={styles.title}>{data.title}</p>

          <p className={styles.tagline}>{data.tagline}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>view my work</a>
            <a
              href={`${import.meta.env.BASE_URL}${data.resume}`}
              download
              className={styles.resume}
            >
              ↓ résumé
            </a>
            <a
              href={data.links.github}
              target="_blank"
              rel="noreferrer"
              className={styles.secondary}
            >
              github →
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span /><span /><span />
              <span className={styles.termLabel}>muawiya@multan ~</span>
            </div>
            <div className={styles.termBody}>
              {data.hero.terminal.map((line) => (
                <div key={line.cmd} className={styles.termLine}>
                  <span className={styles.prompt}>{line.prompt}</span>
                  <span className={styles.cmd}>{line.cmd}</span>
                  <div className={styles.output}>{line.output}</div>
                </div>
              ))}
              <div className={styles.cursorLine}>
                <span className={styles.prompt}>$</span>
                <span className={styles.blink}>_</span>
              </div>
            </div>
          </div>

          <div className={styles.contrib}>
            <div className={styles.contribHeader}>
              <span className={styles.contribLabel}>github · 2025</span>
              <span className={styles.contribCount}>1,201 contributions</span>
            </div>
            <div className={styles.contribGrid}>
              {data.hero.contributionGrid.map((level, i) => (
                <span
                  key={i}
                  className={`${styles.cell} ${levelColors[level] || ''}`}
                  title={`level ${level}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
