import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'src/state/actions/action_types'

export function* register_customer() {
  yield takeEvery(types.REGISTER_CUSTOMER_REQUEST, function* () {
    const response = yield call(register_customer)
    yield put(register_customer(response))
  })
}
