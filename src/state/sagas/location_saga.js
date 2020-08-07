import { put, takeEvery, call } from 'redux-saga/effects'
import {
  get_location_response,
  add_customer_location_response,
} from 'src/state/actions/location_actions'
import * as location_api from 'src/state/services/location'
import * as types from 'src/state/actions/action_types'

export function* get_location() {
  yield takeEvery(types.GET_LOCATION_REQUEST, function* (action) {
    const { on_success } = action
    const location = yield call(location_api.get_location)
    on_success && on_success(location)
    yield put(get_location_response(location))
  })
}

export function* set_location() {
  yield takeEvery(types.SET_LOCATION, function* (action) {
    const { location, on_success } = action
    yield call(location_api.set_location, location)
    on_success && on_success()
  })
}

export function* add_customer_location() {
  yield takeEvery(types.ADD_CUSTOMER_LOCATION_REQUEST, function* (data) {
    const response = yield call(location_api.add_customer_location, data.customer_location)
    yield put(add_customer_location_response(response.data.location))
    data.on_success && data.on_success(response.data.location)
  })
}
