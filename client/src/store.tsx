import { Dispatch } from '@reduxjs/toolkit'
import { Note, User } from 'notes-models'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import noteFormReducer from 'reducers/noteFormReducer'
import noteReducer from 'reducers/noteReducer'
import userReducer from 'reducers/userReducer'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  notes: (JSON.parse(localStorage.getItem('notes') as string) || []) as Note[],
  noteForm: (JSON.parse(localStorage.getItem('note-form') as string) || {}) as Note,
  user: (JSON.parse(localStorage.getItem('note-form') as string) || {}) as User
}

const reducer = combineReducers({
  notes: noteReducer,
  noteForm: noteFormReducer,
  user: userReducer
})

const store = createStore(reducer, initialState, composeWithDevTools())

export default store

type RootState = ReturnType<typeof store.getState>

interface Action {
  type: string
  payload: any
}

type AppDispatch = Dispatch<Action>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()
