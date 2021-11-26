import NewNoteButton from 'components/NewNoteButton'
import NoteGrid from 'components/NoteGrid'
import SortButton from 'components/SortButton'
import Welcome from 'components/Welcome'
import styles from 'styles/NotesPage.module.css'

const NotesPage = () => (
  <div className={styles.base}>
    <NewNoteButton />
    <Welcome />
    <SortButton />
    <NoteGrid />
  </div>
)

export default NotesPage
