import { useEffect } from 'react'

import { 
    useSelector, 
    useDispatch 
} from 'react-redux'

import { 
    filtersFetching, 
    filtersFetched,
    filtersFetchingError
} from '../../slices/filtersSlice'

import useService from '../../services/useService'

import HeroesFilter from '../heroesFilter/heroesFilter'

import HeroesFiltersSkeleton from '../heroesFiltersSkeleton/heroesFiltersSkeleton'

const HeroesFilters = () => {
    const filters = useSelector(state => state.filters.filters)
    const filtersLoadingStatus = useSelector(state => state.filters.filtersLoadingStatus)
    
    const dispatch = useDispatch()

    const { getAllFilters } = useService()

    useEffect(() => {
        dispatch(filtersFetching())
        filtersLoaded()
    }, [])

    const filtersLoaded = () => {
        getAllFilters()
            .then(filter => dispatch(filtersFetched(filter)))
            .catch(error => dispatch(filtersFetchingError()))
    }

    const fitlersRender = (array) => {
        const filters = array.map(({ label, element, color }, i) => {
            return <HeroesFilter
                key={i}
                label={label}
                element={element}
                color={color}
            />
        })

        return filters
    }
    
    const items = fitlersRender(filters)
    
    return (
        <section className='filters'>
            <div className='filters-container'>
                <h3 className='filters__title'>Отфильтруйте героев по элементам</h3>
                {filtersLoadingStatus === 'loading' ? <HeroesFiltersSkeleton/> : items}
            </div>
        </section>
    )
}

export default HeroesFilters
