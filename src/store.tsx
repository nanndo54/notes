import Note from 'models/Note'
import noteFormReducer from 'reducers/noteFormReducer'
import noteReducer from 'reducers/noteReducer'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  notes: (JSON.parse(localStorage.getItem('notes') as string) || []) as Note[],
  noteForm: (JSON.parse(localStorage.getItem('note-form') as string) || {}) as Note
}

const reducer = combineReducers({
  notes: noteReducer,
  noteForm: noteFormReducer
})

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
