import { useSelector } from 'react-redux'

const HeroesFormSelect = () => {
    const filters = useSelector(state => state.filter.filters)

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

    return (
        <select required name='element' className='form-element__select'>
            <option hidden>Я владею элементом...</option>
            {items}
        </select>
    )
}

export default HeroesFormSelect
