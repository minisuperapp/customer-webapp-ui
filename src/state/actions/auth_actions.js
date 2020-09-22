import * as types from './action_types'

export function get_profile_request(on_success) {
  return { type: types.GET_PROFILE_REQUEST, on_success }
}

export function get_profile_response(profile) {
  return { type: types.GET_PROFILE_RESPONSE, profile }
}

export function register_customer_request() {
  return { type: types.REGISTER_CUSTOMER_REQUEST }
}

export function register_customer_response(response) {
  return { type: types.REGISTER_CUSTOMER_RESPONSE, response }
}

export function save_email_phone_request(payload, on_success) {
  return { type: types.SAVE_EMAIL_PHONE_REQUEST, payload, on_success }
}

export function save_email_phone_response(response) {
  return { type: types.SAVE_EMAIL_PHONE_RESPONSE, response }
}

export function login_customer_request(credentials, on_success) {
  return { type: types.LOGIN_CUSTOMER_REQUEST, credentials, on_success }
}

export function login_customer_response() {
  return { type: types.LOGIN_CUSTOMER_RESPONSE }
}
