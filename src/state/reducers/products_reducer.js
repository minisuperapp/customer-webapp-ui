import _ from 'lodash'
import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'
import {
  addToLowestPriceByProduct,
  addToOffersByProduct,
  get_lowest_price_by_product,
  isLowestPrice
} from "../services/offers";

export default function reducer(state = initial_state.products, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_RESPONSE: {
      const products = action.response
      const by_code = _.keyBy(action.response, 'code')
      localStorage.setItem('products_by_code', JSON.stringify(by_code))
      const list = get_sorted_products(products, state.best_offers_by_product)
      return Immutable({
        ...state,
        list,
        by_code,
      })
    }
    case types.SEARCH_PRODUCTS_REQUEST:
      return Immutable({
        ...state,
        query: action.query,
      })
    case types.GET_BEST_OFFERS_RESPONSE: {
      const lowest_price_by_product = get_lowest_price_by_product(action.response)
      const best_offers_by_product = action.response
      const list = get_sorted_products(state.list, best_offers_by_product)
      return Immutable({
        ...state,
        list,
        best_offers_by_product,
        lowest_price_by_product,
      })
    }
    case types.LISTEN_PUBLISHED_OFFER_RESPONSE: {
      const best_offers_by_product = addToOffersByProduct(state.best_offers_by_product, action.offer)
      let lowest_price_by_product
      if (isLowestPrice(state.lowest_price_by_product, action.offer)) {
        lowest_price_by_product = addToLowestPriceByProduct(
          state.lowest_price_by_product,
          action.offer,
        )
      }
      const list = get_sorted_products(state.list, best_offers_by_product)
      return Immutable({
        ...state,
        list,
        best_offers_by_product,
        lowest_price_by_product: {
          ...(lowest_price_by_product || state.lowest_price_by_product),
        },
      })
    }
    default:
      return state
  }
}

function get_sorted_products(list, best_offers_by_product) {
  return [].concat(list)
    .sort(product => best_offers_by_product[product.code] ? -1 : 1)
}
