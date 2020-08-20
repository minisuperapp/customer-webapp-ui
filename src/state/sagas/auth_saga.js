import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'src/state/actions/action_types'
import { login_customer_response, get_profile_response } from '../actions/auth_actions'
import * as auth_service from 'src/state/services/auth'
import { show_alert_message } from '../actions/alert_actions'

export function* get_profile() {
  yield takeEvery(types.GET_PROFILE_REQUEST, function* () {
    const response = yield call(auth_service.get_profile)
    yield put(get_profile_response(response.profile))
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
      yield put(show_alert_message('Los datos son incorrectos'))
    }
    yield put(login_customer_response(response))
  })
}
