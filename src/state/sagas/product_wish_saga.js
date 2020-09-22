import { put, takeEvery, call } from 'redux-saga/effects'
import { add_product_wish_response } from 'src/state/actions/product_wish_actions'
import * as product_wish_api from 'src/state/services/product_wishes'
import * as types from 'src/state/actions/action_types'

export function* add_product_wish() {
  yield takeEvery(types.ADD_PRODUCT_WISH_REQUEST, function* (data) {
    const { location, description, on_success } = data
    const response = yield call(product_wish_api.add_product_wish, { description, location })
    if (response.success) {
      yield put(add_product_wish_response())
      on_success && on_success()
    }
  })
}
