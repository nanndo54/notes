import NoteItem from 'components/NoteItem'
import UnloadedNotes from 'components/UnloadedNotes'
import { useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const NoteGrid = () => {
  const { notes } = useAppSelector((state) => state.notes)

  return (
    <div>
      {notes.length > 0 && (
        <div className={styles.base}>
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      )}
      <UnloadedNotes />
    </div>
  )
}

export default NoteGrid
