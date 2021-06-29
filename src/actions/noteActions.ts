import Note from 'models/Note'

const generateId = () => Math.floor(Math.random() * 99999999999) + 1

const createNote = (payload: Note) => ({
  type: 'add',
  payload: { ...payload, id: generateId() }
})

export { createNote }
