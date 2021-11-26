import { Note as INote } from 'notes-types'
import styles from 'styles/Note.module.css'
import { Link } from 'wouter'

const Note = ({ id, title, content }: INote) => (
  <Link className={styles.base} to={`/notes/${id}`}>
    <h3>{title}</h3>
    <p>{content}</p>
  </Link>
)

export default Note
