import * as types from './action_types'

export const get_product_request = () => ({
  type: types.GET_PRODUCTS_REQUEST,
})

export function get_product_response(products) {
  return { type: types.GET_PRODUCTS_RESPONSE, products }
}
