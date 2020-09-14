import * as types from './action_types'

export const place_order_request = (order, on_success) => ({
  type: types.PLACE_ORDER_REQUEST,
  order,
  on_success,
})

export function place_order_response(orders) {
  return { type: types.PLACE_ORDER_RESPONSE, orders }
}

export const get_orders_for_xday_request = xday => ({
  type: types.GET_ORDERS_FOR_XDAY_REQUEST,
  xday,
})

export const get_orders_for_xday_response = response => ({
  type: types.GET_ORDERS_FOR_XDAY_RESPONSE,
  response,
})
