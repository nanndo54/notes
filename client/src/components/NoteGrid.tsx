import NoteItem from 'components/NoteItem'
import UnloadedNotes from 'components/UnloadedNotes'
import { FC } from 'react'
import { useAppSelector } from 'store'
import styles from 'styles/NoteGrid.module.css'

const NoteGrid: FC = () => {
  const { notes } = useAppSelector((state) => state.notes)

  return (
    <>
      {notes.length > 0 && (
        <div className={styles.base}>
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      )}
      <UnloadedNotes />
    </>
  )
}

export default NoteGrid
