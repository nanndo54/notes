import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-models'
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
      state.push(payload)
    },
    [getNotes.fulfilled.toString()]: (state, { payload }: PayloadAction<Note[]>) => {
      state.push(...payload)
    },
    [getNotes.rejected.toString()]: (state) => {
      state.splice(0, state.length)
    },
    [deleteNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state.splice(state.indexOf(payload), 1)
    },
    [updateNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state[state.indexOf(payload)] = payload
    }
  }
})

export const { clearNotes } = notesSlice.actions

export default notesSlice.reducer
