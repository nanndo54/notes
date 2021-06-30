import Note from 'models/Note'
import noteReducer from 'reducers/noteReducer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialNotes = (JSON.parse(localStorage.getItem('notes') as string) || []) as Note[]

const store = createStore(noteReducer, initialNotes, composeWithDevTools())

export default store
