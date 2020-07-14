import * as types from './action_types'

export const place_order_request = (order) => ({
  type: types.PLACE_ORDER_REQUEST,
  order,
})

export function place_order_response(data) {
  return { type: types.PLACE_ORDER_RESPONSE, data }
}

export const get_current_orders_request = () => ({
  type: types.GET_CURRENT_ORDERS_REQUEST,
})

export const get_current_orders_response = (response) => ({
  type: types.GET_CURRENT_ORDERS_RESPONSE,
  response,
})
