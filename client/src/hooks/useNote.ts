import { Note } from 'notes-types'
import { createNote, deleteNote, getNote, updateNote } from 'services/noteServices'
import { useAppDispatch, useAppSelector } from 'store'

function useNote() {
  const { notes, loading } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  const handleGetNote = (id: string) => {
    if (notes.length) return Promise.resolve(notes.find((note) => note.id === id))
    return dispatch(getNote(id)).unwrap()
  }

  const handleCreateNote = (note: Note = {}) => dispatch(createNote(note)).unwrap()

  const handleUpdateNote = (note: Note) => dispatch(updateNote(note)).unwrap()

  const handleDeleteNote = (note: Note) => dispatch(deleteNote(note)).unwrap()

  return { handleGetNote, handleCreateNote, handleUpdateNote, handleDeleteNote, loading }
}

export default useNote
