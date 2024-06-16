import { useEffect } from 'react'
import { 
    useSelector, 
    useDispatch 
} from 'react-redux'

import { 
    filtersFetching, 
    filtersFetched 
} from '../../actions/actions'

import useService from '../../services/useService'

import HeroesFilter from '../HeroesFilter/HeroesFilter'

import HeroesFiltersSkeleton from '../HeroesFiltersSkeleton/HeroesFiltersSkeleton'

const HeroesFilters = () => {
    const filters = useSelector(state => state.filters)
    const filtersLoadingStatus = useSelector(state => state.filtersLoadingStatus)
    
    const dispatch = useDispatch()

    const { getAllFilters } = useService()

    useEffect(() => {
        dispatch(filtersFetching())
        filtersLoading()
    }, [])

    const filtersLoading = () => {
        getAllFilters()
        .then(filter => dispatch(filtersFetched(filter)))
    }

    const fitlersRender = (array) => {
        const filters = array.map((element, i) => {
            return <HeroesFilter key={i} element={element}/>
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
