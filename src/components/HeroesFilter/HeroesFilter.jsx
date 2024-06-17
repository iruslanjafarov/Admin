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
        borderLeftRadius={borderLeftRadius}
        borderRightRadius={borderRightRadius}
        />
    )
}

export default HeroesFilter

const FilterButton = ({ label, color, borderLeftRadius, borderRightRadius }) => {
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
        >{label}</button>
    )
}