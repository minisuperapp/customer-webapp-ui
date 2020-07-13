import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.orders, action) {
  switch (action.type) {
    case types.PLACE_ORDER_RESPONSE:
      debugger
      return Immutable([
        ...state,
        action.data.order
      ])
    default:
      return state
  }
}
