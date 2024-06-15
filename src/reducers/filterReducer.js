const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export default filterReducer