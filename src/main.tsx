import './index.css'

import App from 'components/App'
import { initialNotes } from 'hooks/useNotes'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import noteReducer from 'reducers/noteReducer'
import { createStore } from 'redux'

const store = createStore(noteReducer, initialNotes)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
