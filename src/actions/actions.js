export const heroesFetching = () => ({ type: 'HEROES_FETCHING' })
export const heroesFetchingError = () => ({ type: 'HEROES_FETCHING_ERROR' })
export const filtersFetching = () => ({ type: 'FILTERS_FETCHING' })

export const heroesFetched = (heroes) => { 
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const filtersFetched = (filters) => { 
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
