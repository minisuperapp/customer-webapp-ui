import { put, takeEvery, call } from 'redux-saga/effects'
import { get_offers_by_product_response } from 'src/state/actions/offer_actions'
import * as offers_api from 'src/state/services/offers'
import * as types from 'src/state/actions/action_types'

export function* get_offers_by_product() {
  yield takeEvery(types.GET_OFFERS_BY_PRODUCT_REQUEST, function* (data) {
    const { customer_location } = data
    const response = yield call(offers_api.get_offers_by_product, customer_location)
    yield put(get_offers_by_product_response(response))
  })
}
