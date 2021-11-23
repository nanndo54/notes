import './styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css'

import App from 'components/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector('main')
)
