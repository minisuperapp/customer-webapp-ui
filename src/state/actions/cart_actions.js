import * as types from './action_types'

export function set_selected_product(product) {
  return { type: types.SET_SELECTED_PRODUCT, product }
}

export function set_selected_quantity(quantity) {
  return { type: types.SET_SELECTED_QUANTITY, quantity }
}

export function set_selected_customer_location(customer_location_id) {
  return { type: types.SET_SELECTED_CUSTOMER_LOCATION, customer_location_id }
}
