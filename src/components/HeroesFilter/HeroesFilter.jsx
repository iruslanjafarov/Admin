import { useSelector, useDispatch } from 'react-redux'

import { heroesFetched } from '../../actions/actions'

const HeroesFilter = ({ element }) => {
    const heroes = useSelector(state => state.heroes)
    const filters = useSelector(state => state.filters)

    const dispatch = useDispatch()

    let label = ''
    let color = ''
    let borderLeftRadius = ''
    let borderRightRadius = ''
    
    switch (element) {
        case 'fire':
            label = 'Огонь'
            color = '#dc3545'
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'water':
            label = 'Вода'
            color = '#0d6efd'
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'wind':
            label = 'Воздух'
            color = '#198754'
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'earth':
            label = 'Земля'
            color = '#6c757d'
            borderLeftRadius = '0px'
            borderRightRadius = '4px'
            break
        default:
            label = 'Все'
            color = '#212529'
            borderLeftRadius = '4px'
            borderRightRadius = '0px'
            break
    }

    const onFilterActive = (currentFilter) => {
        //dispatch(heroesFetched(filters.filter(filter => filter !== heroes.element)))
        
        //dispatch(heroesFetched(filters.filter(currentFilter === heroes.element)))
    }

    return (
        <FilterButton label={label} color={color} borderLeftRadius={borderLeftRadius} borderRightRadius={borderRightRadius} element={element} onFilterActive={onFilterActive}/>
    )
}

export default HeroesFilter

const FilterButton = ({ label, color, borderLeftRadius, borderRightRadius, element, onFilterActive }) => {
    return (
        <button style=
            {
                {
                    backgroundColor: color,
                    borderRadius: '0px',
                    borderTopLeftRadius: borderLeftRadius,
                    borderBottomLeftRadius: borderLeftRadius,
                    borderTopRightRadius: borderRightRadius,
                    borderBottomRightRadius: borderRightRadius
                }
            }
        className='filter__button'
        onClick={() => onFilterActive(element)}
        >{label}</button>
    )
}