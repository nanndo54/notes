import { Action } from 'models/Action'
import Note from 'models/Note'

const updateNoteForm = (data: Note): Action => ({
  type: '@notes-form/update',
  payload: data
})

export { updateNoteForm }
