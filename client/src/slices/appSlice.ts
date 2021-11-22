import { createSlice } from '@reduxjs/toolkit'

interface I {
  isMenuOpenned: boolean
}

const initialState: I = {
  isMenuOpenned: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpenned = !state.isMenuOpenned
    }
  }
})

export const { toggleMenu } = appSlice.actions

export default appSlice.reducer
