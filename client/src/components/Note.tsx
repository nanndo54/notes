import { Note as INote } from 'notes-types'
import styles from 'styles/Note.module.css'
import { Link } from 'wouter'

interface Props {
  note: INote
}

const Note = ({ note: { id, title, content } }: Props) => (
  <Link className={`${styles.base} unselectable`} to={`/notes/${id}`}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>{content}</div>
  </Link>
)

export default Note
