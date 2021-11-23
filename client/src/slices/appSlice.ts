import { createSlice } from '@reduxjs/toolkit'

interface State {
  isMenuOpenned: boolean
}

const initialState: State = {
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
