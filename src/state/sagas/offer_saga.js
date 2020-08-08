import { take, put, takeEvery, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import {
  get_best_offers_response,
  listen_published_offer_response,
  assign_best_offer_response,
  get_product_offers_response,
  change_offer_response,
} from 'src/state/actions/offer_actions'
import * as offers_api from 'src/state/services/offers'
import * as types from 'src/state/actions/action_types'
import { connect } from 'src/state/api/socket'
import * as location_api from 'src/state/services/location'
import * as offersService from '../services/offers'

export function* get_best_offers() {
  yield takeEvery(types.GET_BEST_OFFERS_REQUEST, function* () {
    const location = yield call(location_api.get_location)
    const response = yield call(offers_api.get_best_offers, location)
    yield put(get_best_offers_response(response))
  })
}

export function* listen_published_offers() {
  const socket = connect()
  const location = yield call(location_api.get_location)
  socket.emit('subscribe_for_offers_updates', location, function () {})
  const chan = new eventChannel(emit => {
    socket.on('published_offer', offer => {
      emit({ channel: 'published_offer', offer })
    })

    return () => {
      // remove listeners
    }
  })
  while (true) {
    let payload = yield take(chan)
    switch (payload.channel) {
      case 'published_offer':
        yield put(listen_published_offer_response(payload.offer))
        break
    }
  }
}

export function* assign_best_offer() {
  yield takeEvery(types.ASSIGN_BEST_OFFER_REQUEST, function* (payload) {
    const { on_error } = payload
    const { product_code, quantity } = payload.data
    const location = yield call(location_api.get_location)
    const response = yield call(offersService.assign_best_offer, {
      location,
      product_code,
      quantity,
    })
    if (response.success) {
      yield put(assign_best_offer_response(response.data))
    } else {
      on_error && on_error(response.errors)
    }
  })
}

export function* get_product_offers() {
  yield takeEvery(types.GET_PRODUCT_OFFERS_REQUEST, function* (data) {
    const { payload } = data
    const location = yield call(location_api.get_location)
    const response = yield call(offers_api.get_product_offers, {
      ...payload,
      location,
    })
    yield put(get_product_offers_response(response))
  })
}

export function* change_offer() {
  yield takeEvery(types.CHANGE_OFFER_REQUEST, function* (data) {
    yield put(change_offer_response(data.payload))
    if (data.success) {
      data.success()
    }
  })
}
