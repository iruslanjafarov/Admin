import { useEffect } from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'

import { 
    heroesFetching,
    heroesFetched,
    heroesFetchingError
} from '../../actions/actions'

import { 
    CSSTransition, 
    TransitionGroup
} from 'react-transition-group'

import useService from '../../services/useService'

import Hero from '../Hero/Hero'

import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

const Heroes = () => {
    const heroes = useSelector(state => state.heroes)
    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus)

    const dispatch = useDispatch()

    const { getAllHeroes } = useService()

    useEffect(() => {
        dispatch(heroesFetching())
        heroesLoading()
    }, [])

    const heroesLoading = () => {
        getAllHeroes()
        .then(hero => dispatch(heroesFetched(hero)))
        .catch(() => dispatch(heroesFetchingError()))
    }

    const renderHeroes = (array) => {
        //if (array.length === 0) {
        //    return <h5>Героев пока нет!</h5> //TODO: Исправить проблему с React-Transition-Group и лишним элементом
        //}

        return array.map(({ id, name, description, element }) => {
            return (
                <CSSTransition key={id} timeout={500} classNames='hero'>
                    <Hero name={name} description={description} element={element}/>
                </CSSTransition>
            )
        })
    }

    switch (heroesLoadingStatus) {
        case 'loading':
            return <Spinner/>
        case 'error':
            return <Error/>
    }

    const items = renderHeroes(heroes)

    return (
        <section className='heroes'>
            <ul>
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        </section>
    )
}

export default Heroes