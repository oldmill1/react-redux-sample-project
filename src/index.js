import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import kitchenApp from './reducers'
import App from './components/App'

const store = createStore(kitchenApp)

store.dispatch({
    type: 'ADD_INGREDIENT',
    payload: {
        id: "1",
        name: "Apple"
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

