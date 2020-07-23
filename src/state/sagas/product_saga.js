import { put, takeEvery, call } from 'redux-saga/effects'
import { get_product_response } from 'src/state/actions/product_actions'
import * as products_api from 'src/state/services/products'
import * as types from 'src/state/actions/action_types'

export function* get_products() {
  yield takeEvery(types.GET_PRODUCTS_REQUEST, function* () {
    const response = yield call(products_api.get_products)
    yield put(get_product_response(response))
  })
}
