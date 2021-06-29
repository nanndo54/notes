import { addNote } from 'hooks/useNotes'
import Note from 'models/Note'
import { Reducer } from 'redux'

type Action = { type: 'add'; payload: Note }

const noteReducer: Reducer<Note[], Action> = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'add':
      return addNote(state, payload)

    default:
      return state
  }
}

export default noteReducer
