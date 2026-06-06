import { data } from '../data'
import { useInView } from '../hooks/useInView'
import styles from './Goals.module.css'

export default function Goals() {
  const [ref, inView] = useInView()

  return (
    <section id="goals" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <span className={styles.ghost} aria-hidden="true">07</span>
        <p className={styles.intro}>{data.goals.intro}</p>
        <div className={styles.items}>
          {data.goals.items.map((g) => (
            <div key={g.label} className={styles.item}>
              <span className={styles.label}>{g.label}</span>
              <p className={styles.text}>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
