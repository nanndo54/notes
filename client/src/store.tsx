import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import noteFormSlice from 'slices/noteFormSlice'
import notesSlice from 'slices/notesSlice'
import userSlice from 'slices/userSlice'

const reducer = combineReducers({
  noteForm: noteFormSlice,
  notes: notesSlice,
  user: userSlice
})

const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
