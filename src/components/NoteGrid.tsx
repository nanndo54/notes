import Note from 'components/Note'
import RootState from 'models/RootState'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from 'styles/NoteGrid.module.css'

const Notes = () => {
  const notes = useSelector((state: RootState) => state.notes)

  return (
    <div className={styles.base}>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

export default Notes
