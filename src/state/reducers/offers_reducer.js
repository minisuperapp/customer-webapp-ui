import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'
import { get_lowest_price_by_product } from '../services/offers'

export default function reducer(state = initial_state.offers, action) {
  switch (action.type) {
    case types.GET_OFFERS_BY_PRODUCT_RESPONSE:
      return Immutable({
        ...state.offers,
        by_product: action.response,
        lowest_price_by_product: get_lowest_price_by_product(action.response),
      })
    default:
      return state
  }
}
