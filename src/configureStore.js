import { createStore } from 'redux'
import kitchenApp from './reducers'

const data = {
    ingredients: [{
        id: 1,
        name: 'Pear'
    }]
}

const configureStore = () => {
    const store = createStore(
        kitchenApp,
        data,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

export default configureStore
