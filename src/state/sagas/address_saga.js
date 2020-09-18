import { put, takeEvery, call } from 'redux-saga/effects'
import { add_customer_address_response } from 'src/state/actions/address_actions'
import * as location_api from 'src/state/services/address'
import * as types from 'src/state/actions/action_types'

export function* add_customer_address() {
  yield takeEvery(types.ADD_CUSTOMER_ADDRESS_REQUEST, function* (data) {
    const response = yield call(location_api.add_customer_address, data.customer_address)
    yield put(add_customer_address_response(response.data.location))
    data.on_success && data.on_success(response.data.location)
  })
}
