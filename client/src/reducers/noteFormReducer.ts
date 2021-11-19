import { Note } from 'notes-models'
import { Reducer } from 'redux'

type actionType = '@notes-form/update' | '@notes-form/reset'

type Action = { type: actionType; payload: Note }

const DEFAULT_NOTE: Note = { title: '' }

const noteFormReducer: Reducer<Note, Action> = (state = DEFAULT_NOTE, action) => {
  switch (action.type) {
    case '@notes-form/update': {
      const newNote = action.payload
      save(newNote)
      return newNote
    }
    case '@notes-form/reset': {
      const newNote = DEFAULT_NOTE
      save(newNote)
      return newNote
    }
    default:
      return state
  }
}

const save = (notes: Note) => localStorage.setItem('note', JSON.stringify(notes))

export default noteFormReducer
