import { useSelector } from 'react-redux'

import { 
    selectAll as allFilters
} from '../../slices/filtersSlice'

const HeroesFormSelect = ({ getCurrentOption }) => {
    const filters = useSelector(allFilters)

    const fitlersRender = (array) => {
        return array.map(({ label }, i) => {
            if (label === 'Все') {
                return
            }
            
            return <option
                key={i}
                value={label}
                tabIndex={0}
                >{label}
            </option>
        })
    }

    const items = fitlersRender(filters)

    const provideCurrentOption = (e) => {
        const target = e.target.value

        getCurrentOption(target)
    }

    return (
        <select 
        required
        onChange={(e) => provideCurrentOption(e)}
        name='element'
        className='form-element__select'>
            <option hidden>Я владею элементом...</option>
            {items}
        </select>
    )
}

export default HeroesFormSelect
