import Note from 'components/Note'
import React from 'react'
import { useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const Notes = () => {
  const notes = useAppSelector((state) => state.notes)

  return (
    <div className={styles.base}>
      {notes.length ? (
        notes.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <div>add your first note!</div>
      )}
    </div>
  )
}

export default Notes
