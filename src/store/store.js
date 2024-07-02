import { configureStore } from '@reduxjs/toolkit'

import heroes from '../slices/heroesSlice'
import filters from '../slices/filtersSlice'

const store = configureStore({ 
    reducer: { heroes, filters },
})

export default store
