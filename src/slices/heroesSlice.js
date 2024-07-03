import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
    createSelector
} from '@reduxjs/toolkit'

import http from '../services/http'

const heroesAdapter = createEntityAdapter()

const initialState = heroesAdapter.getInitialState({ heroesLoadingStatus: 'idle' })

const heroesFetch = createAsyncThunk(
    'heroes/heroesFetch',
    () => {
        const { request } = http()
        
        return request(import.meta.env.VITE_LINK_HEROES)
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: initialState,
    reducers: {
        heroCreate: (state, action) => {
            heroesAdapter.addOne(state, action.payload)
        },
        heroDeleted: (state, action) => {
            heroesAdapter.removeOne(state, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(heroesFetch.pending, (state) => { state.heroesLoadingStatus = 'loading' })
            .addCase(heroesFetch.fulfilled, (state, action) => { heroesAdapter.setAll(state, action.payload), state.heroesLoadingStatus = 'idle' })
            .addCase(heroesFetch.rejected, (state) => { state.heroesLoadingStatus = 'error' })
            .addDefaultCase(() => {})
    }
})

const { selectAll } = heroesAdapter.getSelectors((state) => state.heroes)

export const filteredHeroesSelector = createSelector(
    [selectAll, (state) => state.filters.filterActive],
    (heroes, activeFilter) => {
        if (activeFilter === 'all') {
            return heroes
        }

        return heroes.filter(hero => hero.element === activeFilter)
    }
)

const { actions, reducer } = heroesSlice

export const {
    heroCreate,
    heroDeleted
} = actions

export { heroesFetch }


export default reducer
