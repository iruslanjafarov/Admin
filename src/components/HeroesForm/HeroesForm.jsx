import { useState } from 'react'

import { useHeroCreateMutation } from '../../slices/apiSlice'

import { useForm } from 'react-hook-form'

import { nanoid } from '@reduxjs/toolkit'

import HeroesFormSelect from '../heroesFormSelect/heroesFormSelect'

const HeroesForm = () => {
    const [currentOption, setCurrentOption] = useState('')

    const [ heroCreate ] = useHeroCreateMutation()

    switch (currentOption) {
        case 'Огонь':
            setCurrentOption('fire')
            break
        case 'Вода':
            setCurrentOption('water')
            break
        case 'Воздух':
            setCurrentOption('wind')
            break
        case 'Земля':
            setCurrentOption('earth')
            break
        default:
            break
    }

    const getCurrentOption = (option) => {
        setCurrentOption(option)
    }

    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onHeroCreate = ({ name, description }) => {
        const hero = { id: nanoid(), name: name, description: description, element: currentOption }

        heroCreate(hero)

        reset()
    }

    return (
        <section className='form'>
            <div className='form-container'>
                <form className='form-item' onSubmit={handleSubmit(onHeroCreate)}>
                    <div className='form-name'>
                        <h3 className='form-name__title'>Имя нового героя</h3>
                        <input
                        { ...register('name', { required: 'Необходимо заполнить имя персонажа' }) }
                        type='text'
                        name='name'
                        placeholder='Как меня зовут?'
                        className='form-name__input'
                        />
                        <h4 className='form-name__error'>{errors.name?.message}</h4>
                    </div>
                    <div className='form-description'>
                        <h3 className='form-description__title'>Описание</h3>
                        <textarea
                        { ...register('description', { required: 'Необходимо заполнить информацию о персонаже' }) }
                        type='text'
                        name='description'
                        placeholder='Что я умею?' className='form-description__textarea'
                        />
                        <h4 className='form-description__error'>{errors.description?.message}</h4>
                    </div>
                    <div className='form-element'>
                        <h3 className='form-element__title'>Выбрать элемент героя</h3>
                        <HeroesFormSelect getCurrentOption={getCurrentOption}/>
                    </div>
                    <button className='form__button'>Создать</button>
                </form>
            </div>
        </section>
    )
}

export default HeroesForm
