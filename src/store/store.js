import { configureStore } from '@reduxjs/toolkit'

import filters from '../slices/filtersSlice'

import {
    reducerPath,
    reducer,
    middleware as queryMiddleware
} from '../slices/apiSlice'

const store = configureStore({ 
    reducer: {
        filters,
        [reducerPath]: reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryMiddleware)
})

export default store
