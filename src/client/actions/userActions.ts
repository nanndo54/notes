import { Action } from 'models/Action'
import User from 'models/User'

const loginUser = (data: User): Action => ({
  type: '@user/login',
  payload: data
})

const logoutUser = (): Action => ({
  type: '@notes/delete'
})

export { loginUser, logoutUser }
