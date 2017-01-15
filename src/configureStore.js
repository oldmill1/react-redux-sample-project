import { createStore } from 'redux'
import kitchenApp from './reducers'
import { v4 } from 'uuid'

const data = {
    ingredients: [{
        id: v4(),
        name: 'Pear',
        type: 'produce'
    },{
        id: v4(),
        name: 'Apple',
        type: 'produce'
    },{
        id: v4(),
        name: 'Chicken',
        type: 'meat'
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
