import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'
import { createNote, deleteNote, getNotes, updateNote } from 'services/noteServices'

interface State {
  notes: Note[]
  sortby: string
  direction: number
  needed: boolean
  loading: boolean
}

const initialState: State = {
  notes: [],
  sortby: 'date',
  direction: -1,
  needed: false,
  loading: false
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortby = action.payload
    },
    triggerDirection: (state) => {
      state.direction *= -1
    },
    setNeededNotes: (state) => {
      state.needed = true
    },
    clearNotes: (state) => {
      state.notes = []
    }
  },
  extraReducers: {
    [createNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      state.notes.unshift(payload)
    },
    [getNotes.pending.toString()]: (state) => {
      state.loading = true
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
      state.notes.splice(index, 1)
      state.notes.unshift(payload)
    }
  }
})

export const { changeSortBy, triggerDirection, setNeededNotes, clearNotes } =
  notesSlice.actions

export default notesSlice.reducer
