import * as types from './action_types'

export function add_customer_address_request(customer_address, on_success) {
  return { type: types.ADD_CUSTOMER_ADDRESS_REQUEST, customer_address, on_success }
}

export function add_customer_address_response(customer_address) {
  return { type: types.ADD_CUSTOMER_ADDRESS_RESPONSE, customer_address }
}
