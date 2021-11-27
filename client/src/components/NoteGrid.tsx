import NoteItem from 'components/NoteItem'
import { useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const NoteGrid = () => {
  const { notes } = useAppSelector((state) => state.notes)

  return (
    <div className={styles.base}>
      {notes.length ? (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      ) : (
        <div className={styles.message}>Add your first note!</div>
      )}
    </div>
  )
}

export default NoteGrid
