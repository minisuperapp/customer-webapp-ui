import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products_reducer'
import cart from './cart_reducer'
import offers from './offers_reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    offers,
    cart,
  })

export default createRootReducer
