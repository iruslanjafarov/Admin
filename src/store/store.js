import { configureStore } from '@reduxjs/toolkit'

import heroes from '../reducers/heroes'
import filters from '../reducers/filters'

const reducer = {
    heroes,
    filters
}

const store = configureStore({ reducer })

export default store
