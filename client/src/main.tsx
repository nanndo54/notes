import './styles/index.css'

import App from 'components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('main')
)
