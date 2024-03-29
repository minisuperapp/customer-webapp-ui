import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'src/state/actions/action_types'
import {
  login_customer_response,
  get_profile_response,
  save_email_phone_response,
} from '../actions/auth_actions'
import * as auth_service from 'src/state/services/auth'
import { show_alert_message } from '../actions/alert_actions'

export function* get_profile() {
  yield takeEvery(types.GET_PROFILE_REQUEST, function* (data) {
    const { on_success } = data
    const response = yield call(auth_service.get_profile)
    yield put(get_profile_response(response))
    on_success && on_success(response)
  })
}

export function* save_email_phone() {
  yield takeEvery(types.SAVE_EMAIL_PHONE_REQUEST, function* (data) {
    const { on_success, payload } = data
    const response = yield call(auth_service.save_email_phone, payload)
    yield put(save_email_phone_response(payload))
    on_success && on_success(response)
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
      yield put(show_alert_message({ message: 'Los datos son incorrectos' }))
    }
    yield put(login_customer_response(response))
  })
}
