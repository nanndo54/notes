import NewNoteButton from 'components/NewNoteButton'
import NoteGrid from 'components/NoteGrid'
import SortButton from 'components/SortButton'
import UnloadedNotes from 'components/UnloadedNotes'
import Welcome from 'components/Welcome'
import useNotesPage from 'hooks/useNotesPage'
import styles from 'styles/NotesPage.module.css'

const NotesPage = () => {
  useNotesPage()

  return (
    <div className={styles.base}>
      <NewNoteButton />
      <Welcome />
      <SortButton />
      <NoteGrid />
      <UnloadedNotes />
    </div>
  )
}

export default NotesPage
