import { data } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.line}>{data.footer.line}</p>
      <a href={`mailto:${data.footer.email}`} className={styles.email}>
        {data.footer.email}
      </a>
    </footer>
  )
}
