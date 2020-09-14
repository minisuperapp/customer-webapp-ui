import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.orders, action) {
  switch (action.type) {
    case types.GET_ORDERS_FOR_XDAY_RESPONSE:
      return Immutable(action.response)
    default:
      return state
  }
}
