import _ from 'lodash'
import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.cart, action) {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      const { product_code, quantity } = action
      const products = {
        ...state.products,
        [product_code]: quantity,
      }
      localStorage.setItem('cart_products', JSON.stringify(products))
      return Immutable({ ...state, products })
    }
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
        product_offers: action.response.list,
      })
    case types.CHANGE_OFFER_RESPONSE:
      return Immutable({
        ...state,
        offer: action.response,
      })
    case types.SET_SELECTED_CUSTOMER_LOCATION: {
      return Immutable({ ...state, customer_location_id: action.customer_location_id })
    }
    case types.PLACE_ORDER_RESPONSE: {
      localStorage.removeItem('cart_quantity')
      return Immutable(initial_state.cart)
    }
    case types.GET_PROFILE_RESPONSE: {
      const customer_location_id = _.get(action, 'profile.locations[0].id')
      return Immutable({ ...state, customer_location_id })
    }
    default:
      return state
  }
}
