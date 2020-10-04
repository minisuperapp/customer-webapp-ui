import { put, takeEvery, call } from 'redux-saga/effects'
import { set_postal_area_response, set_location_response } from 'src/state/actions/location_actions'
import * as location_api from 'src/state/services/location'
import * as types from 'src/state/actions/action_types'

export function* set_location() {
  yield takeEvery(types.SET_LOCATION_REQUEST, function* (action) {
    const { location, on_success } = action
    yield call(location_api.set_location, location)
    yield put(set_location_response(location))
    on_success && on_success()
  })
}

export function* set_postal_area() {
  yield takeEvery(types.SET_POSTAL_AREA_REQUEST, function* (action) {
    const { postal_area, on_success } = action
    const response = yield call(location_api.set_postal_area, postal_area)
    yield put(set_postal_area_response(response))
    on_success && on_success()
  })
}
