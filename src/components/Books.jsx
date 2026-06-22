import { data } from '../data'
import { SectionHeader } from './UI'
import { useInView } from '../hooks/useInView'
import styles from './Books.module.css'

export default function Books() {
  const [ref, inView] = useInView()

  return (
    <section id="books" className={styles.section} ref={ref}>
      <div className={`${styles.wrap} ${inView ? styles.show : ''}`}>
        <SectionHeader
          number="06"
          title="bookshelf"
          subtitle="what I'm reading to go deeper"
        />

        <div className={styles.grid}>
          {data.books.map((book, i) => (
            <article
              key={book.title}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.top}>
                <span className={styles.tag}>{book.tag}</span>
                {book.status && <span className={styles.status}>{book.status}</span>}
              </div>
              <h3 className={styles.title}>{book.title}</h3>
              <div className={styles.author}>{book.author}</div>
              <p className={styles.takeaway}>{book.takeaway}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}