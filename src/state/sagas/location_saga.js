import { put, takeEvery, call } from 'redux-saga/effects'
import {
  get_location_response,
  set_postal_area_response,
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
  yield takeEvery(types.SET_LOCATION_REQUEST, function* (action) {
    const { location, on_success } = action
    yield call(location_api.set_location, location)
    on_success && on_success()
  })
}

export function* set_postal_area_request() {
  yield takeEvery(types.SET_POSTAL_AREA_REQUEST, function* (action) {
    const { postal_area, on_success } = action
    yield call(location_api.set_postal_area, postal_area)
    yield put(set_postal_area_response())
    on_success && on_success()
  })
}
