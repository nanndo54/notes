import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'
import { createNote, deleteNote, getNotes, updateNote } from 'services/notesServices'

const initialState: Note[] = []

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    clearNotes: (state) => {
      state.splice(0, state.length)
    }
  },
  extraReducers: {
    [createNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state.unshift(payload)
    },
    [getNotes.fulfilled.toString()]: (state, { payload }: PayloadAction<Note[]>) => {
      state.splice(0, state.length)
      state.push(...payload)
    },
    [deleteNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state.splice(state.indexOf(payload), 1)
    },
    [updateNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      const index = state.findIndex((note) => note.id === payload.id)
      state[index] = payload
    }
  }
})

export const { clearNotes } = notesSlice.actions

export default notesSlice.reducer
