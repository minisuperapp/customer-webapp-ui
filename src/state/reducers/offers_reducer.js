import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'
import {
  addToLowestPriceByProduct,
  isLowestPrice,
  addToOffersByProduct,
  get_lowest_price_by_product,
} from '../services/offers'

export default function reducer(state = initial_state.offers, action) {
  switch (action.type) {
    case types.GET_OFFERS_BY_PRODUCT_RESPONSE:
      return Immutable({
        ...state.offers,
        by_product: action.response,
        lowest_price_by_product: get_lowest_price_by_product(action.response),
      })
    case types.LISTEN_PUBLISHED_OFFER_RESPONSE: {
      const by_product = addToOffersByProduct(state.by_product, action.offer)
      let lowest_price_by_product
      if (isLowestPrice(state.lowest_price_by_product, action.offer)) {
        lowest_price_by_product = addToLowestPriceByProduct(
          state.lowest_price_by_product,
          action.offer,
        )
      }
      return Immutable({
        ...state,
        by_product,
        lowest_price_by_product: {
          ...(lowest_price_by_product || state.lowest_price_by_product),
        },
      })
    }
    default:
      return state
  }
}
