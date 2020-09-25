import * as sagas from './index'

export const init_sagas = (sagaMiddleware) => {
  Object.values(sagas).forEach((saga) => run_saga(sagaMiddleware, saga))
}

function run_saga(sagaMiddleware, saga) {
  return sagaMiddleware
    .run(saga)
    .toPromise()
    .catch((error) => {
      console.error({ error })
      run_saga(sagaMiddleware, saga)
    })
}
