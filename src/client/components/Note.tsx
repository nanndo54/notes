import INote from 'models/Note'
import React from 'react'
import styles from 'styles/Note.module.css'
import { Link } from 'wouter'

interface Props {
  note: INote
}

const Note = ({ note: { id, title, details } }: Props) => {
  return (
    <Link className={`${styles.base} unselectable`} to={`/note/${id}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.details}>{details}</div>
    </Link>
  )
}

export default Note
