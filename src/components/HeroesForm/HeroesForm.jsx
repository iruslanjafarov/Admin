import { useState } from 'react'

import { 
    useSelector, 
    useDispatch 
} from 'react-redux'

import { useForm } from 'react-hook-form'

import { heroesFetched } from '../../actions/actions'

import HeroesFormSelect from '../HeroesFormSelect/HeroesFormSelect'

const HeroesForm = () => {
    const heroes = useSelector(state => state.hero.heroes)
    const [currentFilter, setCurrentFilter] = useState('')

    const dispatch = useDispatch()

    const { 
        register,
        handleSubmit,
    } = useForm()

    const getCurrentFilter = (filter) => {
        setCurrentFilter(filter)
    }

    const onSubmit = ({ name, description }) => {
        const newHero = { id: 4, name, description, element: currentFilter }

        const newHeroesArray = [...heroes, newHero]

        dispatch(heroesFetched(newHeroesArray))
    }

    return (
        <section className='form'>
            <div className='form-container'>
                <form className='form-item' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-name'>
                        <h3 className='form-name__title'>Имя нового героя</h3>
                        <input { ...register('name') } type='text' name='name' placeholder='Как меня зовут?' className='form-name__input' />
                    </div>
                    <div className='form-skills'>
                        <h3 className='form-skills__title'>Описание</h3>
                        <textarea { ...register('description') } type='text' name='description' placeholder='Что я умею?' className='form-skills__textarea' />
                    </div>
                    <div className='form-element'>
                        <h3 className='form-element__title'>Выбрать элемент героя</h3>
                        <HeroesFormSelect getCurrentFilter={getCurrentFilter}/>
                    </div>
                    <button className='form__button'>Создать</button>
                </form>
            </div>
        </section>
    )
}

export default HeroesForm
