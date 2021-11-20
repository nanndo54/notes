import Note from 'components/Note'
import { useEffect } from 'react'
import { getNotes } from 'services/notesServices'
import { clearNotes } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const NoteGrid = () => {
  const notes = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNotes())
    return () => {
      dispatch(clearNotes())
    }
  }, [])

  return (
    <div className={styles.base}>
      {notes.length ? (
        notes.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <div className={styles.message}>Add your first note!</div>
      )}
    </div>
  )
}

export default NoteGrid
