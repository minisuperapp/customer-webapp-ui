import _ from 'lodash'
import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.products, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_RESPONSE:
      return Immutable({
        ...state,
        list: Immutable(action.response),
        by_code: _.keyBy(action.response, 'code'),
      })
    case types.SEARCH_PRODUCTS_REQUEST:
      return Immutable({
        ...state,
        query: action.query,
      })
    default:
      return state
  }
}
