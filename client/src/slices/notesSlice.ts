import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from 'notes-models'
import {
  createNoteService,
  deleteNoteService,
  getNotesService,
  updateNoteService
} from 'services/notesServices'

const initialState: Note[] = []

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    getNotes: (state) => {
      getNotesService()
        .then((notes) => {
          state.concat(notes)
        })
        .catch(console.log)
    },
    createNote: (state, action: PayloadAction<Note>) => {
      createNoteService(action.payload)
        .then(() => {
          state.push(action.payload)
        })
        .catch(console.log)
    },
    deleteNote: (state, action: PayloadAction<Note>) => {
      deleteNoteService(action.payload)
        .then(() => {
          state.splice(state.indexOf(action.payload), 1)
        })
        .catch(console.log)
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      updateNoteService(action.payload)
        .then(() => {
          state[state.indexOf(action.payload)] = action.payload
        })
        .catch(console.log)
    },
    clearNotes: (state) => {
      state.splice(0, state.length)
    }
  }
})

export const { getNotes, createNote, deleteNote, updateNote, clearNotes } =
  notesSlice.actions

export default notesSlice.reducer
