import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'constants/api'
import { Note } from 'notes-types'

const NOTES_API_URL = `${API_URL}/notes`

const createNote = createAsyncThunk('notes/createNote', async (note: Note) => {
  const response = await axios.post(NOTES_API_URL, note)
  if (response.status !== 201) throw new Error('Error creating note')
  return response.data
})

const deleteNote = createAsyncThunk('notes/deleteNote', async (note: Note) => {
  const response = await axios.delete(`${NOTES_API_URL}/${note.id}`)
  if (response.status !== 200) throw new Error('Error deleting note')
  return response.data
})

const getNotes = createAsyncThunk(
  'notes/getNotes',
  async ({
    sortBy,
    direction,
    offset
  }: {
    sortBy: string
    direction: number
    offset: number
  }) => {
    const response = await axios.get(`${NOTES_API_URL}/${sortBy}&${direction}/${offset}`)
    if (response.status !== 200) throw new Error('Error getting notes')
    return response.data
  }
)

const getNote = createAsyncThunk('notes/getNote', async (id: string) => {
  const response = await axios.get(`${NOTES_API_URL}/${id}`)
  if (response.status !== 200) throw new Error('Error getting note')
  return response.data
})

const updateNote = createAsyncThunk('notes/updateNote', async (note: Note) => {
  const response = await axios.put(`${NOTES_API_URL}/${note.id}`, note)
  if (response.status !== 200) throw new Error('Error updating note')
  return response.data
})

export { createNote, deleteNote, getNote, getNotes, updateNote }
