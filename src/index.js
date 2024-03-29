import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import smoothscroll from 'smoothscroll-polyfill'
import Amplify from 'aws-amplify'
import config from './aws-exports'

import App from './app'
import makeStore from './store'
import * as serviceWorker from './serviceWorker'
import './index.scss'

const store = makeStore()
smoothscroll.polyfill()
Amplify.configure(config)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
