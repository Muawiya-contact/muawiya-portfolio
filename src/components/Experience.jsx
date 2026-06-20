import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Experience.module.css'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.show : ''}`}>
        <SectionHeader
          number="02"
          title="experience"
          subtitle="where I've built and shipped"
        />

        <div className={styles.list}>
          {data.experience.map((job, i) => (
            <div
              key={job.org}
              className={styles.entry}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.period}>{job.period}</div>
              <div className={styles.body}>
                <h3 className={styles.role}>{job.role}</h3>
                <div className={styles.org}>{job.org}</div>
                <ul className={styles.points}>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {job.link && (
                  <a
                    className={styles.link}
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.linkLabel} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
