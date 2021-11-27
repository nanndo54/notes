import { Note } from 'notes-types'
import {
  createNote,
  deleteNote,
  duplicateNote,
  getNote,
  updateNote
} from 'services/noteServices'
import { useAppDispatch, useAppSelector } from 'store'

function useNote() {
  const { notes, selected, loading } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  const handleGetNote = (id: string) => {
    if (notes.length) return Promise.resolve(notes.find((note) => note.id === id))
    return dispatch(getNote(id)).unwrap()
  }

  const handleCreateNote = (note: Note = {}) => dispatch(createNote(note)).unwrap()

  const handleDuplicateNote = (note: Note = {}) => dispatch(duplicateNote(note)).unwrap()

  const handleUpdateNote = (note: Note) => dispatch(updateNote(note)).unwrap()

  const handleDeleteNote = (note: Note) => dispatch(deleteNote(note)).unwrap()

  return {
    handleGetNote,
    handleCreateNote,
    handleDuplicateNote,
    handleUpdateNote,
    handleDeleteNote,
    selected,
    loading
  }
}

export default useNote
