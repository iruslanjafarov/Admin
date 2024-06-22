import { useDispatch } from 'react-redux'

import { filterActive } from '../../actions/filters'

const HeroesFilter = ({ label, element, color }) => {
    let borderLeftRadius = ''
    let borderRightRadius = ''
    
    switch (element) {
        case 'fire':
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'water':
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'wind':
            borderLeftRadius = '0px'
            borderRightRadius = '0px'
            break
        case 'earth':
            borderLeftRadius = '0px'
            borderRightRadius = '4px'
            break
        default:
            borderLeftRadius = '4px'
            borderRightRadius = '0px'
            break
    }

    return (
        <FilterButton
            label={label}
            color={color}
            element={element}
            borderLeftRadius={borderLeftRadius}
            borderRightRadius={borderRightRadius}
        />
    )
}

export default HeroesFilter

const FilterButton = ({ label, color, element, borderLeftRadius, borderRightRadius }) => {
    const dispatch = useDispatch()
    
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
        onClick={() => dispatch(filterActive(element))}
        >{label}</button>
    )
}
