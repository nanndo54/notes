import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-types'
import {
  createNote,
  deleteNote,
  duplicateNote,
  getNote,
  getNotes,
  updateNote
} from 'services/noteServices'

interface State {
  notes: Note[]
  sortBy: string
  direction: number
  offset: number
  selected: string
  needed: boolean
  loading: boolean
  available: boolean
}

const initialState: State = {
  notes: [],
  sortBy: 'date',
  direction: -1,
  offset: 0,
  selected: '',
  needed: false,
  loading: false,
  available: true
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
      state.notes = []
      state.offset = 0
      state.available = true
    },
    triggerDirection: (state) => {
      state.direction *= -1
      state.notes = []
      state.offset = 0
      state.available = true
    },
    setSelectedNote: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
    },
    setNeededNotes: (state) => {
      state.needed = true
    },
    clearNotes: (state) => {
      state.notes = []
      state.offset = 0
      state.available = true
    }
  },
  extraReducers: {
    [createNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      payload.date = new Date(payload.date || new Date())
      state.notes.push(payload)
      sortNotes(state.notes, state.sortBy, state.direction)
    },
    [duplicateNote.fulfilled.toString()]: (state, { payload }: PayloadAction<Note>) => {
      payload.date = new Date(payload.date || new Date())
      state.notes.push(payload)
      sortNotes(state.notes, state.sortBy, state.direction)
    },
    [getNotes.pending.toString()]: (state) => {
      state.loading = true
    },
    [getNotes.fulfilled.toString()]: (state, { payload }: PayloadAction<Note[]>) => {
      const ids = state.notes.map((note) => note.id) as string[]
      payload = payload
        .filter((note) => !ids.includes(note.id as string))
        .map((note) => ({
          ...note,
          date: new Date(note.date || new Date())
        }))

      state.notes = state.notes.concat(payload)

      state.offset = state.notes.length
      state.loading = false
      if (!payload.length) state.available = false
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
    (a[sortBy] as string) < (b[sortBy] as string) ? direction * -1 : direction
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
