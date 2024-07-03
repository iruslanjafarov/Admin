import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'

import http from '../services/http'

const filtersAdapter = createEntityAdapter()

const initialState = filtersAdapter.getInitialState({ filtersLoadingStatus: 'idle', filterActive: 'all' })

const filtersFetch = createAsyncThunk(
    'filters/filtersFetch',
    () => {
        const { request } = http()

        return request(import.meta.env.VITE_LINK_FILTERS)
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        filterActive: (state, action) => {
            state.filterActive = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filtersFetch.pending, (state) => { state.filtersLoadingStatus = 'loading' })
            .addCase(filtersFetch.fulfilled, (state, action) => { filtersAdapter.setAll(state, action.payload), state.filtersLoadingStatus = 'idle' })
            .addCase(filtersFetch.rejected, (state) => { state.filtersLoadingStatus = 'error' })
            .addDefaultCase(() => {})
    }
})

export const { selectAll } = filtersAdapter.getSelectors((state) => state.filters)

const { actions, reducer } = filtersSlice

export const { filterActive } = actions

export { filtersFetch }

export default reducer
