import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './OpenSource.module.css'

export default function OpenSource() {
  const [ref, inView] = useInView()

  return (
    <section id="open-source" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.show : ''}`}>
        <SectionHeader
          number="04"
          title="open source"
          subtitle="code I shipped to repos I don't own"
          align="right"
        />

        <div className={styles.list}>
          {data.openSource.map((os, i) => (
            <a
              key={os.name}
              href={os.link}
              target="_blank"
              rel="noreferrer"
              className={styles.entry}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.index}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.body}>
                <div className={styles.top}>
                  <span className={styles.org}>{os.org}</span>
                  <span className={styles.highlight}>{os.highlight}</span>
                </div>
                <h3 className={styles.name}>{os.name}</h3>
                <p className={styles.desc}>{os.desc}</p>
                <ul className={styles.prs}>
                  {os.prs.map((pr) => (
                    <li key={pr}>{pr}</li>
                  ))}
                </ul>
              </div>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
