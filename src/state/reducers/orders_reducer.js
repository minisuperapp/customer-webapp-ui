import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.orders, action) {
  switch (action.type) {
    case types.GET_CURRENT_ORDERS_RESPONSE:
      return Immutable(action.response)
    case types.PLACE_ORDER_RESPONSE: {
      const order = {
        ...action.order,
        product_code: action.order.order_details[0].product_code,
      }
      return Immutable([...state, order])
    }
    default:
      return state
  }
}
