import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.cart, action) {
  switch (action.type) {
    case types.SET_SELECTED_PRODUCT:
      return Immutable({
        ...state,
        product: action.product,
      })
    case types.SET_SELECTED_QUANTITY:
      return Immutable({
        ...state,
        quantity: action.quantity,
      })
    default:
      return state
  }
}
