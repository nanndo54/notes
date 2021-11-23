import NewNoteButton from 'components/NewNoteButton'
import NoteForm from 'components/NoteForm'
import NoteGrid from 'components/NoteGrid'
import Welcome from 'components/Welcome'
import styles from 'styles/NotesPage.module.css'

const NotesPage = () => (
  <div className={styles.base}>
    <Welcome />
    <NoteForm />
    <NoteGrid />
    <NewNoteButton />
  </div>
)

export default NotesPage
