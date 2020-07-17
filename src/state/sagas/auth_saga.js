import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'src/state/actions/action_types'
import { register_customer_response } from '../actions/auth_actions'
import * as auth_service from 'src/state/services/auth'

export function* register_customer() {
  yield takeEvery(types.REGISTER_CUSTOMER_REQUEST, function* () {
    const response = yield call(auth_service.register_customer)
    yield put(register_customer_response(response))
  })
}
