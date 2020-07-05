import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products_reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products
  })

export default createRootReducer
