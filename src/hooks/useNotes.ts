import { createNote } from 'actions/noteActions'
import Note from 'models/Note'
import { useDispatch, useSelector } from 'react-redux'

const initialNotes = (JSON.parse(localStorage.getItem('notes') as string) || []) as Note[]

const useNotes = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state: Note[]) => state)

  const newNote = (data: Note) => dispatch(createNote(data))

  return { notes, newNote }
}

export default useNotes

const save = (notes: Note[]) => localStorage.setItem('notes', JSON.stringify(notes))

const addNote = (notes: Note[], note: Note) => {
  const newNotes = notes.concat(note)
  save(newNotes)
  return newNotes
}

export { addNote, initialNotes }
