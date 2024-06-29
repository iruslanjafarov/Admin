import { configureStore } from '@reduxjs/toolkit'

import heroes from '../slices/heroesSlice'
import filters from '../slices/filtersSlice'

const store = configureStore({ 
    reducer: { heroes, filters },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
