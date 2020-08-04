import * as types from './action_types'

export const get_location_request = on_success => ({
  type: types.GET_LOCATION_REQUEST,
  on_success,
})

export function get_location_response(location) {
  return { type: types.GET_LOCATION_RESPONSE, location }
}

export const set_location = (location, on_success) => ({
  type: types.SET_LOCATION,
  location,
  on_success,
})

export function add_customer_location_request(customer_location, on_success) {
  return { type: types.ADD_CUSTOMER_LOCATION_REQUEST, customer_location, on_success }
}

export function add_customer_location_response(customer_location) {
  return { type: types.ADD_CUSTOMER_LOCATION_RESPONSE, customer_location }
}
