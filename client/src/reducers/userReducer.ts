import { User } from 'notes-models'
import { Reducer } from 'redux'

type actionType = '@user/login' | '@user/logout'

type Action = { type: actionType; payload: User }

const NO_USER: User = {
  username: 'none',
  email: 'none'
}

const noteReducer: Reducer<User, Action> = (state = NO_USER, action) => {
  switch (action.type) {
    case '@user/login': {
      save(action.payload)
      return action.payload
    }
    case '@user/logout': {
      save(NO_USER)
      return NO_USER
    }
    default:
      return state
  }
}

const save = (notes: User) => localStorage.setItem('user', JSON.stringify(notes))

export default noteReducer
