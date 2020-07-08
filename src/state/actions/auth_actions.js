import * as types from './action_types'

export function register_customer_request() {
  return { type: types.REGISTER_CUSTOMER_REQUEST }
}

export function register_customer_response() {
  return { type: types.REGISTER_CUSTOMER_RESPONSE }
}
