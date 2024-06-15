import { configureStore } from '@reduxjs/toolkit'

import filterReducer from '../reducers/filterReducer'
import heroReducer from '../reducers/heroReducer'

const store = configureStore({ reducer: { hero: heroReducer, filter: filterReducer } })

export default store