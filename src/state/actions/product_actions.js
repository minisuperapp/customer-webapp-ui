import * as types from './action_types'

export const get_product_request = () => ({
  type: types.GET_PRODUCTS_REQUEST,
})

export function get_product_response(response) {
  return { type: types.GET_PRODUCTS_RESPONSE, response }
}


export function set_selected_product(code) {
  return { type: types.SET_SELECTED_PRODUCT, code }
}
