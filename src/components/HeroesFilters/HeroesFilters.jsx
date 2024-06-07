import { useState, useEffect } from 'react'

import useService from '../../services/useService'

import HeroesFilter from '../HeroesFilter/HeroesFilter';

const HeroesFilters = () => {
    const [filters, setFilters] = useState([]);

    const { getAllFilters } = useService()

    useEffect(() => {
        filtersLoaded()
    }, [])

    const filtersLoaded = () => {
        getAllFilters().then(filter => setFilters(filter))
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