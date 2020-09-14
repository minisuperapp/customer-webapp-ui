import { put, takeEvery, call } from 'redux-saga/effects'
import { place_order_response, get_orders_for_xday_response } from 'src/state/actions/order_actions'
import * as orders_api from 'src/state/services/orders'
import * as types from 'src/state/actions/action_types'
import { show_alert_message } from '../actions/alert_actions'

export function* place_order() {
  yield takeEvery(types.PLACE_ORDER_REQUEST, function* (data) {
    const { order, on_success } = data
    const response = yield call(orders_api.place_order, order)
    if (response.success) {
      yield put(place_order_response(response.orders))
      on_success && on_success(response.orders)
    } else {
      yield put(show_alert_message('Datos incorrectos'))
    }
  })
}

export function* get_orders_for_xday() {
  yield takeEvery(types.GET_ORDERS_FOR_XDAY_REQUEST, function* (data) {
    const { xday } = data
    const response = yield call(orders_api.get_orders_for_xday, xday)
    yield put(get_orders_for_xday_response(response))
  })
}
