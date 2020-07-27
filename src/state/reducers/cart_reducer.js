import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.cart, action) {
  switch (action.type) {
    case types.SET_SELECTED_PRODUCT:
      localStorage.setItem('cart_product', JSON.stringify(action.product))
      return Immutable({
        ...state,
        product: action.product,
      })
    case types.SET_SELECTED_QUANTITY:
      localStorage.setItem('cart_quantity', action.quantity)
      return Immutable({
        ...state,
        quantity: action.quantity,
      })
    case types.ASSIGN_BEST_OFFER_RESPONSE:
      return Immutable({
        ...state,
        offer: action.response,
      })
    case types.GET_PRODUCT_OFFERS_RESPONSE:
      return Immutable({
        ...state,
        product_offers: action.response.data,
      })
    default:
      return state
  }
}
