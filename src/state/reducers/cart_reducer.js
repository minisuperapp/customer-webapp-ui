import _ from 'lodash'
import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.cart, action) {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      const { product_code, quantity, unit_price } = action
      const products = {
        ...state.products,
        [product_code]: {
          quantity,
          unit_price,
        },
      }
      const total = get_total(products)
      localStorage.setItem('cart_products', JSON.stringify(products))
      return Immutable({ ...state, products, total })
    }
    case types.REMOVE_PRODUCT: {
      const { product_code } = action
      const products = Immutable.without(state.products, product_code)
      const total = get_total(products)
      localStorage.setItem('cart_products', JSON.stringify(products))
      return Immutable({ ...state, products, total })
    }
    case types.ASSIGN_BEST_OFFER_RESPONSE: {
      const { index, grouped_by_deliverer } = action.response
      const quantities = Object.keys(index).reduce((acc, val) => {
        const offer = index[val]
        acc[val] = state.products[offer.product_code].quantity
        return acc
      }, {})
      const offers = { index, grouped_by_deliverer, quantities }
      return Immutable({
        ...state,
        offers,
      })
    }
    case types.SET_SELECTED_CUSTOMER_LOCATION: {
      return Immutable({ ...state, customer_location_id: action.customer_location_id })
    }
    case types.PLACE_ORDER_RESPONSE: {
      localStorage.removeItem('cart_products')
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

function get_total(products) {
  const total = Object.keys(products)
    .reduce((acc, val) => {
      const quantity = products[val].quantity
      const unit_price = products[val].unit_price
      acc += Number(quantity) * Number(unit_price)
      return acc
    }, 0)
    .toFixed(2)

  sessionStorage.setItem('total', total)
  return total
}
