import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from '../store/store'

import App from './app/app'

import '../styles/style.scss'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)