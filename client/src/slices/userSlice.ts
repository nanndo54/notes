import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'notes-types'
import { createUser, getUser, loginUser } from 'services/userServices'

interface Token {
  token: string
}

interface State {
  user?: User
  token: string
}

const initialState: State = {
  token: localStorage.getItem('token') || ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = undefined
      state.token = ''
      saveToken()
    }
  },
  extraReducers: {
    [getUser.fulfilled.toString()]: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
    },
    [loginUser.fulfilled.toString()]: (state, { payload }: PayloadAction<Token>) => {
      state.token = payload.token

      saveToken(state.token)
      setToken(state.token)
    },
    [loginUser.rejected.toString()]: (state, { payload }: PayloadAction<Error>) => {
      throw payload
    },
    [createUser.rejected.toString()]: (state, { payload }: PayloadAction<Error>) => {
      throw payload
    }
  }
})

const saveToken = (token: string = '') => localStorage.setItem('token', token)

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const { logoutUser } = userSlice.actions

export default userSlice.reducer
