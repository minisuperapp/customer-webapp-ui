import * as types from './action_types'

export const get_offers_by_product_request = (customer_location) => ({
  type: types.GET_OFFERS_BY_PRODUCT_REQUEST,
  customer_location,
})

export function get_offers_by_product_response(response) {
  return { type: types.GET_OFFERS_BY_PRODUCT_RESPONSE, response }
}
