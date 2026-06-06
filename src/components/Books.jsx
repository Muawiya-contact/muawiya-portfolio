import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Books.module.css'

const statusMark = {
  done: '✓',
  reading: '…',
  queued: '○',
}

export default function Books() {
  const [ref, inView] = useInView()

  return (
    <section id="books" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <SectionHeader
          number="06"
          title="reading log"
          subtitle="not a Goodreads profile — just books that stuck"
        />

        <div className={styles.journal}>
          <div className={styles.journalHeader}>
            <span>title</span>
            <span>author</span>
            <span>note</span>
          </div>

          {data.books.map((book, i) => (
            <div
              key={book.title}
              className={styles.row}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className={styles.titleCol}>
                <span className={styles.mark} title={book.status}>
                  {statusMark[book.status]}
                </span>
                <span className={styles.title}>{book.title}</span>
              </div>
              <span className={styles.author}>{book.author}</span>
              <span className={styles.note}>"{book.note}"</span>
            </div>
          ))}
        </div>

        <p className={styles.legend}>
          <span>✓ finished</span>
          <span>… reading now</span>
          <span>○ on the shelf</span>
        </p>
      </div>
    </section>
  )
}
