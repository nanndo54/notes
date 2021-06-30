import Note from 'models/Note'

const generateId = () => Math.floor(Math.random() * 99999999999) + 1

const createNote = (data: Note) => ({
  type: '@notes/add',
  payload: { ...data, id: generateId() }
})

const deleteNote = (data: number) => ({
  type: '@notes/delete',
  payload: { id: data }
})

export { createNote, deleteNote }
