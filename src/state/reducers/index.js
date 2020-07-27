import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products_reducer'
import orders from './orders_reducer'
import cart from './cart_reducer'
import best_offers from './best_offers_reducer'
import auth from './auth_reducer'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    orders,
    best_offers,
    cart,
    auth,
  })

export default createRootReducer
