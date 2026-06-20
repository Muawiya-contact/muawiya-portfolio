import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={`${styles.layout} ${inView ? styles.visible : ''}`}>
        <aside className={styles.sidebar}>
          <SectionHeader
            number="02"
            title="stack"
            subtitle="things I actually use, not things I've watched a tutorial about"
          />
        </aside>

        <div className={styles.lists}>
          {data.skills.map((cat, i) => (
            <div
              key={cat.category}
              className={styles.group}
              style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
            >
              <h3 className={styles.catName}>{cat.category}</h3>
              <p className={styles.items}>
                {cat.items.map((item, j) => (
                  <span key={item}>
                    {j > 0 && <span className={styles.sep}> · </span>}
                    {item}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
