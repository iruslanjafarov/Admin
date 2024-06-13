const HeroesFilter = ({ element }) => {
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

export default HeroesFilter