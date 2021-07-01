import React from 'react'
import styles from 'styles/NoteDetail.module.css'

interface Props {
  id: string
}

const Note = ({ id }: Props) => {
  return <div className={styles.base}>nota {id}</div>
}

export default Note
