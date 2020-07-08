import * as types from './action_types'

export function register_customer_request(request) {
  return { type: types.REGISTER_CUSTOMER_REQUEST, request }
}

export function register_customer_response(response) {
  return { type: types.REGISTER_CUSTOMER_RESPONSE, response }
}
