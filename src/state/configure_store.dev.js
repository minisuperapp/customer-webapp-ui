import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import createSagaMiddleware from 'redux-saga'
import { init_sagas } from './sagas/init_sagas'

export const history = createBrowserHistory()

export default function configure_store(initial_state) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for redux dev tools
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history),
    initial_state,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        reduxImmutableStateInvariant(), //function that warn us if we accidentally mutate any state in the store.
      ),
    ),
  )
  init_sagas(sagaMiddleware)
  return store
}
