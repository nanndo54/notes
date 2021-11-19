import { Action } from 'models/Action'
import Note from 'models/Note'

const generateId = () => Math.floor(Math.random() * 99999999999) + 1

const createNote = (data: Note): Action => ({
  type: '@notes/add',
  payload: { ...data, id: generateId() }
})

const deleteNote = (data: number): Action => ({
  type: '@notes/delete',
  payload: { id: data }
})

export { createNote, deleteNote }
