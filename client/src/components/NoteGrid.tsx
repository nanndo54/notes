import NoteItem from 'components/NoteItem'
import { useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const NoteGrid = () => {
  const { notes } = useAppSelector((state) => state.notes)

  return notes.length ? (
    <div className={styles.base}>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  ) : (
    <></>
  )
}

export default NoteGrid
