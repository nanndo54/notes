import { createSlice } from '@reduxjs/toolkit'
import { User } from 'notes-models'

const initialState: User = {
  username: localStorage.getItem('user') || ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username
      save(state.username)
    },
    logoutUser: (state) => {
      state.username = ''
      save(state.username)
    }
  }
})

const save = (user: string) => localStorage.setItem('user', user)

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
