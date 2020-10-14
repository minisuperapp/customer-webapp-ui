import { applyMiddleware, createStore, compose } from 'redux'
import LogRocket from 'logrocket'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { init_sagas } from './sagas/init_sagas'

export const history = createBrowserHistory()

export default function configure_store(initial_state) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history),
    initial_state,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        reduxImmutableStateInvariant(), //function that warn us if we accidentally mutate any state in the store.
        LogRocket.reduxMiddleware(),
      ),
    ),
  )
  init_sagas(sagaMiddleware)
  return store
}
