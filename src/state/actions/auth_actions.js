import * as types from './action_types'

export function get_profile_request() {
  return { type: types.GET_PROFILE_REQUEST }
}

export function get_profile_response(response) {
  return { type: types.GET_PROFILE_RESPONSE, response }
}

export function register_customer_request() {
  return { type: types.REGISTER_CUSTOMER_REQUEST }
}

export function register_customer_response(response) {
  return { type: types.REGISTER_CUSTOMER_RESPONSE, response }
}

export function login_customer_request(credentials, on_success) {
  return { type: types.LOGIN_CUSTOMER_REQUEST, credentials, on_success }
}

export function login_customer_response() {
  return { type: types.LOGIN_CUSTOMER_RESPONSE }
}
