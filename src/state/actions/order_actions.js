import * as types from './action_types'

export const place_order_request = (order) => ({
  type: types.PLACE_ORDER_REQUEST,
  order,
})

export function place_order_response(data) {
  return { type: types.PLACE_ORDER_RESPONSE, data }
}
