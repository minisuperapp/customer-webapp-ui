import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products_reducer'
import orders from './orders_reducer'
import cart from './cart_reducer'
import auth from './auth_reducer'
import location from './location_reducer'
import customer_addresses from './customer_locations_reducer'
import alert from './alert_reducer'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    orders,
    cart,
    auth,
    location,
    customer_addresses,
    alert,
  })

export default createRootReducer
