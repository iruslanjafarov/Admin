const initialState = {
    heroes: [],
    filters: [],
    filteredHeroes: [],
    heroesLoadingStatus: 'idle',
    filtersLoadingStatus: 'idle',
    filterActive: 'all',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,

                heroes: action.payload,

                filteredHeroes: state.filterActive === 'all' ? action.payload : action.payload.filter(hero => hero.element === state.filterActive),

                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            const newHeroes = state.heroes.filter(hero => hero.id !== action.payload)

            return {
                ...state,

                heroes: newHeroes,

                filteredHeroes: state.filterActive === 'all' ? newHeroes : newHeroes.filter(hero => hero.element === state.filterActive)
            }
        case 'HERO_CREATED':
            let newCreatedHeroes = [...state.heroes, action.payload]

            return {
                ...state,

                heroes: newCreatedHeroes,

                filteredHeroes: state.filterActive === 'all' ? newCreatedHeroes : newCreatedHeroes.filter(hero => hero.element === state.filterActive)
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,

                filters: action.payload,

                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_ACTIVE': 
            return {
                ...state,

                filteredHeroes: action.payload === 'all' ? state.heroes : state.heroes.filter(hero => hero.element === action.payload),
                
                filterActive: action.payload
            }
        default:
            return state
    }
}

export default reducer
