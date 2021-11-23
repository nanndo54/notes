import { Note } from 'notes-types'
import { createNote, deleteNote, updateNote } from 'services/notesServices'
import { useAppDispatch, useAppSelector } from 'store'

function useNote() {
  const { notes, loading } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  const handleGetNote = (id: string) => {
    const note = notes.find((note) => note.id === id)
    return note
  }

  const handleCreateNote = (note: Note) => {
    dispatch(createNote(note))
  }

  const handleUpdateNote = (note: Note) => {
    dispatch(updateNote(note))
  }

  const handleDeleteNote = (note: Note) => {
    dispatch(deleteNote(note))
  }

  return { handleGetNote, handleCreateNote, handleUpdateNote, handleDeleteNote, loading }
}

export default useNote
