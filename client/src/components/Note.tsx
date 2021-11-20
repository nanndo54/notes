import { Note as INote } from 'notes-models'
import styles from 'styles/Note.module.css'
import { Link } from 'wouter'

interface Props {
  note: INote
}

const Note = ({ note: { id, title, details } }: Props) => (
  <Link className={`${styles.base} unselectable`} to={`/note/${id}`}>
    <div className={styles.title}>{title}</div>
    <div className={styles.details}>{details}</div>
  </Link>
)

export default Note
