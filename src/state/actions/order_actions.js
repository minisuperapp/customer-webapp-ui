import * as types from './action_types'

export const place_order_request = (order, on_success) => ({
  type: types.PLACE_ORDER_REQUEST,
  order,
  on_success,
})

export function place_order_response(orders) {
  return { type: types.PLACE_ORDER_RESPONSE, orders }
}

export const get_current_orders_request = () => ({
  type: types.GET_CURRENT_ORDERS_REQUEST,
})

export const get_current_orders_response = (response) => ({
  type: types.GET_CURRENT_ORDERS_RESPONSE,
  response,
})
