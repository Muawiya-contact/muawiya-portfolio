import styles from './UI.module.css'

export function SectionHeader({ number, title, subtitle, align = 'left' }) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      <span className={styles.ghost} aria-hidden="true">{number}</span>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  )
}

export function ScrollProgress({ progress }) {
  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </div>
  )
}
