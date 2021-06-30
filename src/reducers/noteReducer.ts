import Note from 'models/Note'
import { Reducer } from 'redux'

type actionType = '@notes/add' | '@notes/delete'

type Action = { type: actionType; payload: Note }

const noteReducer: Reducer<Note[], Action> = (state = [], action) => {
  switch (action.type) {
    case '@notes/add': {
      const newNotes = state.concat(action.payload)
      save(newNotes)
      return newNotes
    }
    case '@notes/delete': {
      const newNotes = state.filter((note) => note.id != action.payload.id)
      save(newNotes)
      return newNotes
    }
    default:
      return state
  }
}

const save = (notes: Note[]) => localStorage.setItem('notes', JSON.stringify(notes))

export default noteReducer
