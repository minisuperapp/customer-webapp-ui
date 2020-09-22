import * as types from './action_types'

export function add_product_wish_request(description, location, on_success) {
  return { type: types.ADD_PRODUCT_WISH_REQUEST, description, location, on_success }
}

export function add_product_wish_response() {
  return { type: types.ADD_PRODUCT_WISH_RESPONSE }
}
