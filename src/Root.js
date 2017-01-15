import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} />
        </Router>
    </Provider>
)

export default Root
