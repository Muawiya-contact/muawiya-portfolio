import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <SectionHeader
          number="08"
          title="say hi"
          subtitle={data.contact.intro}
        />

        <div className={styles.links}>
          {data.contact.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.link}
            >
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>

        <a href={`mailto:${data.email}`} className={styles.email}>
          {data.email}
        </a>
      </div>
    </section>
  )
}
