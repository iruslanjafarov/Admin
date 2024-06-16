import { useState } from 'react'

import { useSelector } from 'react-redux'

const HeroesFormSelect = ({ getCurrentFilter }) => {
    const filters = useSelector(state => state.filters)
    const [currentFilter, setCurrentFilter] = useState('')

    const fitlersRender = (array) => {
        return array.map((filter, i) => {
            let label = null

            switch (filter) {
                case 'fire':
                    label = 'Огонь'
                    break
                case 'water':
                    label = 'Вода'
                    break
                case 'wind':
                    label = 'Воздух'
                    break
                case 'earth':
                    label = 'Земля'
                    break
                default:
                    return
            }

            return <option key={i} value={filter}>{label}</option>
        })
    }

    const items = fitlersRender(filters)

    const onSelectChange = (e) => {
        const value = e.target.value

        setCurrentFilter(value)

        getCurrentFilter(value)
    }

    return (
        <select value={currentFilter} onChange={(e) => onSelectChange(e)} required name='element' className='form-element__select'>
            <option hidden>Я владею элементом...</option>
            {items}
        </select>
    )
}

export default HeroesFormSelect
