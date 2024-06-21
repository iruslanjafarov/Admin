import { configureStore } from '@reduxjs/toolkit'

import heroes from '../reducers/heroes'
import filters from '../reducers/filters'

const store = configureStore({ reducer: { heroes, filters } })

export default store
