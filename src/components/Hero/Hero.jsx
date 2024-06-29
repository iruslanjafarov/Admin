import { useDispatch } from 'react-redux'

import { heroDeleted } from '../../slices/heroesSlice'

import useService from '../../services/useService'

import Close from '../close/close'

const Hero = ({ id, name, description, element }) => {
    const dispatch = useDispatch()

    const { deleteHero } = useService()

    let backgroundColor = ''

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

    const onHeroDelete = (id) => {
        dispatch(heroDeleted(id))

        deleteHero(id)
    }

    return (
        <li className='hero' style={{backgroundColor}}>
            <div className='hero-container'>
                <img src='/unknown.jpg' alt='hero' className='hero__image' />
                <div className='hero-description'>
                    <h3 className='hero-description__name'>{name}</h3>
                    <p className='hero-description__text'>{description}</p>
                </div>
                <Close method={() => onHeroDelete(id)} classes={'hero__close'}/>
            </div>
        </li>
    )
}

export default Hero
