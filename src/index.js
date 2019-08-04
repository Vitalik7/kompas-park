import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
// store
import store from './services/store'
// components
import App from './components/App'

// persist the store
// persistStore(store, null, () => {
  ReactDOM.render(
    (
      <App />
    ),
    document.getElementById('root')
  )
// })
