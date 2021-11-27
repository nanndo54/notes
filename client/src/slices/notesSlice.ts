import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote
} from 'services/noteServices'

interface State {
  notes: Note[]
  sortBy: string
  direction: number
  selected: string
  needed: boolean
  loading: boolean
}

const initialState: State = {
  notes: [],
  sortBy: 'date',
  direction: -1,
  selected: '',
  needed: false,
  loading: false
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    triggerDirection: (state) => {
      state.direction *= -1
    },
    setSelectedNote: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
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
      payload.date = new Date(payload.date || new Date())
      state.notes.push(payload)
      sortNotes(state.notes, state.sortBy, state.direction)
    },
    [getNotes.pending.toString()]: (state) => {
      state.loading = true
    },
    [getNotes.fulfilled.toString()]: (state, { payload }: PayloadAction<Note[]>) => {
      state.notes = payload.map((note) => ({
        ...note,
        date: new Date(note.date || new Date())
      }))

      state.loading = false
    },
    [getNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      payload.date = new Date(payload.date || new Date())
    },
    [deleteNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === payload.id)
      if (index !== -1) state.notes.splice(index, 1)
    },
    [updateNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      payload.date = new Date(payload.date || new Date())
      const index = state.notes.findIndex((note) => note.id === payload.id)

      if (index !== -1) {
        state.notes[index] = payload
        sortNotes(state.notes, state.sortBy, state.direction)
      }
    }
  }
})

const sortNotes = (notes: Array<any>, sortBy: string, direction: number) => {
  notes.sort((a, b) =>
    (a[sortBy] as string) < (b[sortBy] as string) ? direction : direction * -1
  )
}

export const {
  changeSortBy,
  triggerDirection,
  setSelectedNote,
  setNeededNotes,
  clearNotes
} = notesSlice.actions

export default notesSlice.reducer
