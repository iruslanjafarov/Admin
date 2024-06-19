import { Provider } from 'react-redux'

import store from '../../store/store'

import Heroes from '../Heroes/Heroes'
import HeroesSearch from '../HeroesSearch/HeroesSearch'

const App = () => {
    return (
        <Provider store={store}>
            <main>
                <Heroes/>
                <HeroesSearch/>
            </main>
        </Provider>
    )
}

export default App
