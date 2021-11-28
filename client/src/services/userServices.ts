import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'constants/api'
import { User } from 'notes-types'

const USER_API_URL = `${API_URL}/user`

export const createUser = createAsyncThunk('notes/create', async (user: User) => {
  const response = await axios.post(USER_API_URL, user)
  if (response.status !== 201) throw new Error('Error registering user')
  return response.data
})

export const getUser = createAsyncThunk('notes/get', async (id: string) => {
  const response = await axios.get(`${USER_API_URL}/${id}`)
  if (response.status !== 200) throw new Error('Error getting user')
  return response.data
})

export const loginUser = createAsyncThunk('notes/login', async (user: User) => {
  const response = await axios.get(
    `${USER_API_URL}/login/${user.username}&${user.password}`
  )
  if (response.status !== 200) throw new Error('Error validating user')
  return response.data
})

export const updateNote = createAsyncThunk('notes/update', async (user: User) => {
  const response = await axios.put(`${USER_API_URL}/${user.id}`, user)
  if (response.status !== 200) throw new Error('Error updating user')
  return response.data
})

export const deleteUser = createAsyncThunk('notes/delete', async (user: User) => {
  const response = await axios.delete(`${USER_API_URL}/${user.id}`)
  if (response.status !== 200) throw new Error('Error deleting user')
  return response.data
})
