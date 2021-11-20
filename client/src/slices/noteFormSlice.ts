import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'

const initialState: Note = {
  title: ''
}

const noteFormSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    updateNoteForm: (state, action: PayloadAction<Note>) => {
      state = action.payload
      save(state)
    },
    resetNoteForm: (state) => {
      state = initialState
      save(state)
    }
  }
})

const save = (note: Note) => localStorage.setItem('note', JSON.stringify(note))

export const { updateNoteForm, resetNoteForm } = noteFormSlice.actions

export default noteFormSlice.reducer
