import { put, takeEvery, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { place_order_response } from 'src/state/actions/order_actions'
import * as orders_api from 'src/state/services/orders'
import * as types from 'src/state/actions/action_types'

export function* place_order() {
  yield takeEvery(types.PLACE_ORDER_REQUEST, function* (data) {
    const { order } = data
    const response = yield call(orders_api.place_order, order)
    yield put(place_order_response({ order, response }))
    debugger
    if (response.success) {
      push('/order')
    } else {
      alert(JSON.stringify(response))
    }
  })
}
