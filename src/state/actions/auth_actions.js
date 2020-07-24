import * as types from './action_types'

export function register_customer_request(customer, success) {
  return { type: types.REGISTER_CUSTOMER_REQUEST, customer, success }
}

export function register_customer_response(response) {
  return { type: types.REGISTER_CUSTOMER_RESPONSE, response }
}

export function login_customer_request() {
  return { type: types.LOGIN_CUSTOMER_REQUEST }
}

export function login_customer_response() {
  return { type: types.LOGIN_CUSTOMER_RESPONSE }
}
