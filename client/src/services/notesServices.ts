import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'constants/Api'
import { Note } from 'notes-types'

const NOTES_API_URL = `${API_URL}/notes`

const createNote = createAsyncThunk('notes/createNote', async (note: Note) => {
  const response = await axios.post(NOTES_API_URL, note)
  return response.status === 201
})

const deleteNote = createAsyncThunk('notes/deleteNote', async (note: Note) => {
  const response = await axios.delete(`${NOTES_API_URL}/${note.id}`)
  return response.status === 200
})

const getNotes = createAsyncThunk('notes/getNotes', async () => {
  const response = await axios.get(NOTES_API_URL)
  return response.data
})

const getNote = createAsyncThunk('notes/getNote', async (id: number) => {
  const response = await axios.get(`${NOTES_API_URL}/${id}`)
  return response.data
})

const updateNote = createAsyncThunk('notes/updateNote', async (note: Note) => {
  const response = await axios.put(`${NOTES_API_URL}/${note.id}`, note)
  return response.status === 200
})

export { createNote, deleteNote, getNote, getNotes, updateNote }
