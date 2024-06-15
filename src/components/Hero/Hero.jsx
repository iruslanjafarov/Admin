import Close from '../Close/Close';

const Hero = ({ name, description, element }) => {
    let backgroundColor = '';

    switch (element) {
        case 'fire':
            backgroundColor = '#dc3545'
            break
        case 'water':
            backgroundColor = '#007bff'
            break
        case 'wind':
            backgroundColor = '#28a745'
            break
        case 'earth':
            backgroundColor = '#6c757d'
            break
        default:
            backgroundColor = '#ffc107'
            break
    }
    
    return (
        <li className='hero' style={{backgroundColor}}>
            <div className='hero-container'>
                <img src='/unknown.jpg' alt='hero' className='hero__image' />
                <div className='hero-description'>
                    <h3 className='hero-description__name'>{name}</h3>
                    <p className='hero-description__text'>{description}</p>
                </div>
                <Close classes={'hero__close'}/>
            </div>
        </li>
    )
}

export default Hero