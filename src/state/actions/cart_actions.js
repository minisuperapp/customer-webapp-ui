import * as types from './action_types'

export function add_product(product_code, quantity, unit_price) {
  return { type: types.ADD_PRODUCT, product_code, quantity, unit_price }
}

export function remove_product(product_code) {
  return { type: types.REMOVE_PRODUCT, product_code }
}

export function set_selected_customer_location(customer_address_id) {
  return { type: types.SET_SELECTED_CUSTOMER_LOCATION, customer_address_id }
}
