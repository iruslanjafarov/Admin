import { createReducer } from '@reduxjs/toolkit'

import { 
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterActive
} from '../actions/filters'

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterActive: 'all',
}

const filters = createReducer(initialState, (builder) => {
    builder
        .addCase(filtersFetching, (state) => {
            state.filtersLoadingStatus = 'loading'
        })
        .addCase(filtersFetched, (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        })
        .addCase(filtersFetchingError, (state) => {
            state.filtersLoadingStatus = 'error'
        })
        .addCase(filterActive, (state, action) => {
            state.filterActive = action.payload
        })
        .addDefaultCase(() => {})
})

export default filters
