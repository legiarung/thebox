import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './modules/index'

// export const history = createBrowserHistory()

// const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
    combineReducers({
        // router: connectRouter(history),
        ...reducers
    }),
    // composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
)

export type AppState = ReturnType<typeof store.getState>

export default store
