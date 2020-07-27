import { put, takeEvery, call } from 'redux-saga/effects'
import { get_location_response } from 'src/state/actions/location_actions'
import * as location_api from 'src/state/services/location'
import * as types from 'src/state/actions/action_types'

export function* get_location() {
  yield takeEvery(types.GET_LOCATION_REQUEST, function* (action) {
    const { map } = action
    const location = yield call(location_api.get_location)
    const { latitude, longitude, zoom } = location
    map && map.flyTo({ center: [longitude, latitude], zoom })
    yield put(get_location_response(location))
  })
}

export function* set_location() {
  yield takeEvery(types.SET_LOCATION, function* (action) {
    const { location } = action
    yield call(location_api.set_location, location)
  })
}
