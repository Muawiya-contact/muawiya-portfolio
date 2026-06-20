import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={`${styles.headerWrap} ${inView ? styles.visible : ''}`}>
        <SectionHeader
          number="03"
          title="things I built"
          subtitle="scroll sideways — yes, on purpose"
        />
      </div>

      <div className={`${styles.scrollWrap} ${inView ? styles.visible : ''}`}>
        <div className={styles.track}>
          {data.projects.map((p, i) => {
            const Tag = p.link !== '#' ? 'a' : 'div'
            const props = p.link !== '#'
              ? { href: p.link, target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <Tag
                key={p.name}
                className={styles.card}
                style={{ transitionDelay: `${i * 0.07}s` }}
                {...props}
              >
                <div className={styles.meta}>
                  <span className={styles.year}>{p.year}</span>
                  <span className={styles.type}>{p.type}</span>
                </div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                {p.link !== '#' && <span className={styles.arrow}>↗</span>}
              </Tag>
            )
          })}
        </div>
        <p className={styles.hint}>← drag / scroll →</p>
      </div>
    </section>
  )
}
