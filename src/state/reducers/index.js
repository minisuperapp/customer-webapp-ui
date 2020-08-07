import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products_reducer'
import orders from './orders_reducer'
import cart from './cart_reducer'
import best_offers from './best_offers_reducer'
import auth from './auth_reducer'
import location from './location_reducer'
import customer_locations from './customer_locations_reducer'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    orders,
    best_offers,
    cart,
    auth,
    location,
    customer_locations,
  })

export default createRootReducer
