import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'
import { createNote, deleteNote, getNotes, updateNote } from 'services/notesServices'

interface State {
  notes: Note[]
  loading: boolean
}

const initialState: State = {
  notes: [],
  loading: true
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    clearNotes: (state) => {
      state.notes = []
      state.loading = true
    }
  },
  extraReducers: {
    [createNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state.notes.unshift(payload)
    },
    [getNotes.fulfilled.toString()]: (state, { payload }: PayloadAction<Note[]>) => {
      state.notes = payload
      state.loading = false
    },
    [deleteNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      const index = state.notes.indexOf(payload)
      state.notes.splice(index, 1)
    },
    [updateNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === payload.id)
      state.notes[index] = payload
    }
  }
})

export const { clearNotes } = notesSlice.actions

export default notesSlice.reducer
