import axios from 'axios'
import API_URL from 'constants/Api'
import { Note } from 'notes-models'

const NOTES_API_URL = `${API_URL}/notes`

async function createNoteService(note: Note) {
  const response = await axios.post(NOTES_API_URL, note)
  return response.status === 201
}

async function deleteNoteService(note: Note) {
  const response = await axios.delete(`${NOTES_API_URL}/${note.id}`)
  return response.status === 200
}

async function getNotesService() {
  const response = await axios.get(NOTES_API_URL)
  return response.data
}

async function getNoteService(id: number) {
  const response = await axios.get(`${NOTES_API_URL}/${id}`)
  return response.data
}

async function updateNoteService(note: Note) {
  const response = await axios.put(`${NOTES_API_URL}/${note.id}`, note)
  return response.status === 200
}

export {
  createNoteService,
  deleteNoteService,
  getNoteService,
  getNotesService,
  updateNoteService
}
