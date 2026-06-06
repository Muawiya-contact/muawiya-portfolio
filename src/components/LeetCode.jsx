import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './LeetCode.module.css'

const lc = data.leetcode

export default function LeetCode() {
  const [ref, inView] = useInView()

  return (
    <section id="leetcode" className={styles.section} ref={ref}>
      <div className={`${styles.layout} ${inView ? styles.visible : ''}`}>
        <div className={styles.main}>
          <SectionHeader
            number="05"
            title="leetcode"
            subtitle={lc.intro}
          />

          <div className={styles.statsRow}>
            <div className={styles.bigStat}>
              <span className={styles.bigNum}>{lc.total}</span>
              <span className={styles.bigLabel}>total solved</span>
            </div>
            <div className={styles.diffGrid}>
              <div>
                <span className={`${styles.diffNum} ${styles.easy}`}>{lc.easy}</span>
                <span className={styles.diffLabel}>easy</span>
              </div>
              <div>
                <span className={`${styles.diffNum} ${styles.med}`}>{lc.medium}</span>
                <span className={styles.diffLabel}>medium</span>
              </div>
              <div>
                <span className={`${styles.diffNum} ${styles.hard}`}>{lc.hard}</span>
                <span className={styles.diffLabel}>hard</span>
              </div>
            </div>
          </div>

          <div className={styles.bars}>
            {lc.skills.map((s, i) => (
              <div key={s.name} className={styles.barRow}>
                <div className={styles.barMeta}>
                  <span>{s.name}</span>
                  <span>{s.count}</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{
                      width: inView ? `${(s.count / s.max) * 100}%` : '0%',
                      transitionDelay: `${0.15 + i * 0.05}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.aside}>
          <div className={styles.asideBlock}>
            <span className={styles.asideNum}>{lc.maxStreak}</span>
            <span className={styles.asideLabel}>day max streak</span>
            <p className={styles.asideNote}>my best run — broke it once during finals week, still mad about it</p>
          </div>
          <div className={styles.asideBlock}>
            <span className={styles.asideNum}>{lc.activeDays}</span>
            <span className={styles.asideLabel}>active days</span>
          </div>
          <div className={styles.asideBlock}>
            <span className={styles.asideNumSm}>{lc.acceptanceRate}</span>
            <span className={styles.asideLabel}>acceptance rate</span>
          </div>
          <div className={styles.langs}>
            {lc.languages.map((l) => (
              <span key={l.name} className={styles.lang}>
                {l.name} <em>{l.count}</em>
              </span>
            ))}
          </div>
          <a
            href={data.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className={styles.profileLink}
          >
            my leetcode profile →
          </a>
        </aside>
      </div>
    </section>
  )
}
