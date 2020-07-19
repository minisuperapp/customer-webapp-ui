import * as types from './action_types'

export function register_customer_request(customer) {
  return { type: types.REGISTER_CUSTOMER_REQUEST, customer }
}

export function register_customer_response(response) {
  return { type: types.REGISTER_CUSTOMER_RESPONSE, response }
}
