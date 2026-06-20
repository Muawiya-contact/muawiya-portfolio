import { data } from '../data'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <span className={styles.ghost} aria-hidden="true">01</span>
        <div className={styles.prose}>
          {data.about.map((para, i) => (
            <p key={i} className={styles.para} style={{ transitionDelay: `${i * 0.08}s` }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
