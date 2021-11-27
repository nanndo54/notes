import Button from 'components/Button'
import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import useNote from 'hooks/useNote'
import useOutsideAlerter from 'hooks/useOutsideAleter'
import { Note } from 'notes-types'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { setSelectedNote } from 'slices/notesSlice'
import { useAppDispatch } from 'store'
import styles from 'styles/NoteItem.module.css'
import { Link } from 'wouter'

const NoteItem = (note: Note) => {
  const { id, title, content, date } = note
  const { selected, handleDeleteNote, handleDuplicateNote } = useNote()
  const dispatch = useAppDispatch()

  const isMenuOpenned = id === selected

  const handleMenuButton = () => {
    if (!isMenuOpenned) dispatch(setSelectedNote(id as string))
  }

  const handleToggleMenu = () => {
    dispatch(setSelectedNote(isMenuOpenned ? '' : (id as string)))
  }

  const stringDate = `${date?.getMonth()}/${date?.getDay()} ${date?.getHours()}:${
    date && date.getMinutes() < 10 ? '0' : ''
  }${date?.getMinutes()}`

  const menuRef = useRef<HTMLDivElement>(null)

  useOutsideAlerter(menuRef, handleToggleMenu, isMenuOpenned)

  const handleDeleteButton = () => {
    handleDeleteNote(note).then(() => toast.success('Note deleted'))
  }

  const handleDuplicateButton = () => {
    handleDuplicateNote(note).then(() => toast.success('Note duplicated'))
  }

  return (
    <div className={`${styles.base} ${isMenuOpenned ? styles.show : ''}`}>
      <Button
        className={styles.menuButton}
        variant='transparent'
        onClick={handleMenuButton}
      >
        <Icon name={ICONS.MENU} color='white' />
      </Button>
      <div ref={menuRef} onClick={handleToggleMenu} className={styles.menu}>
        <Button variant='danger' onClick={handleDeleteButton}>
          Delete
        </Button>
        <Button onClick={handleDuplicateButton}>Duplicate</Button>
        <Button>Details</Button>
      </div>
      <Link to={`/notes/${id}`} className={styles.note}>
        <small>{stringDate}</small>
        <h3>{title || '. . .'}</h3>
        <p>{content || '. . .'}</p>
      </Link>
    </div>
  )
}

export default NoteItem
