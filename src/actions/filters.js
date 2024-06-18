export const filtersFetching = () => ({ type: 'FILTERS_FETCHING' })
export const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' })

export const filtersFetched = (filters) => { 
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filterActive = (filter) => {
    return {
        type: 'FILTER_ACTIVE',
        payload: filter
    }
}