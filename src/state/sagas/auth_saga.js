import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'src/state/actions/action_types'
import { login_customer_response, register_customer_response } from '../actions/auth_actions'
import * as auth_service from 'src/state/services/auth'

export function* register_customer() {
  yield takeEvery(types.REGISTER_CUSTOMER_REQUEST, function* (data) {
    const response = yield call(auth_service.register_customer, data.customer)
    if (response.success) {
      if (data.success) {
        data.success(response)
      }
    }
    yield put(register_customer_response(response))
  })
}

export function* login_customer() {
  yield takeEvery(types.LOGIN_CUSTOMER_REQUEST, function* (data) {
    const { credentials, on_success } = data
    const response = yield call(auth_service.login_customer, credentials)
    if (response.success) {
      if (on_success) {
        on_success(response)
      }
    } else {
      alert(JSON.stringify(response.errors))
    }
    yield put(login_customer_response(response))
  })
}
