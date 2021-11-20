import { createSlice } from '@reduxjs/toolkit'
import { User } from 'notes-models'

const initialState: User = {
  username: '',
  email: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state = action.payload
      save(state)
    },
    logoutUser: (state) => {
      state = initialState
      save(state)
    }
  }
})

const save = (user: User) => localStorage.setItem('user', JSON.stringify(user))

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
