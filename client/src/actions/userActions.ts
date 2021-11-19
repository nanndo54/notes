import { Action } from 'models/Action'
import { User } from 'notes-models'

const loginUser = (data: User): Action => ({
  type: '@user/login',
  payload: data
})

const logoutUser = (): Action => ({
  type: '@notes/delete'
})

export { loginUser, logoutUser }
