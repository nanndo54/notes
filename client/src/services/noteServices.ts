import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'constants/api'
import { Note } from 'notes-types'

const NOTES_API_URL = `${API_URL}/notes`

export const createNote = createAsyncThunk('notes/create', async (note: Note) => {
  const response = await axios.post(NOTES_API_URL, note)
  if (response.status !== 201) throw new Error('Error creating note')
  return response.data
})

export const duplicateNote = createAsyncThunk('notes/duplicate', async (note: Note) => {
  const response = await axios.post(`${NOTES_API_URL}/${note.id}`, note)
  if (response.status !== 201) throw new Error('Error duplicating note')
  return response.data
})

export const getNotes = createAsyncThunk(
  'notes/getAll',
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

export const getNote = createAsyncThunk('notes/getOne', async (id: string) => {
  const response = await axios.get(`${NOTES_API_URL}/${id}`)
  if (response.status !== 200) throw new Error('Error getting note')
  return response.data
})

export const updateNote = createAsyncThunk('notes/update', async (note: Note) => {
  const response = await axios.put(`${NOTES_API_URL}/${note.id}`, note)
  if (response.status !== 200) throw new Error('Error updating note')
  return response.data
})

export const deleteNote = createAsyncThunk('notes/delete', async (note: Note) => {
  const response = await axios.delete(`${NOTES_API_URL}/${note.id}`)
  if (response.status !== 200) throw new Error('Error deleting note')
  return response.data
})
