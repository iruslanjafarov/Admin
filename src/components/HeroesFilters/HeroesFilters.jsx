import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filtersFetched } from '../../actions/actions'

import useService from '../../services/useService'

import HeroesFilter from '../HeroesFilter/HeroesFilter'

const HeroesFilters = () => {
    const filters = useSelector(state => state.filters)
    
    const dispatch = useDispatch()

    const { getAllFilters } = useService()

    useEffect(() => {
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

        return filters;
    }

    const items = fitlersRender(filters)
    
    return (
        <section className='filters'>
            <div className='filters-container'>
                <h3 className='filters__title'>Отфильтруйте героев по элементам</h3>
                {items}
            </div>
        </section>
    )
}

export default HeroesFilters