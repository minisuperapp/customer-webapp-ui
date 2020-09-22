import { take, put, takeEvery, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import {
  get_best_offers_response,
  listen_published_offer_response,
  get_product_offers_response,
  change_offer_response,
  assign_best_offer_response,
} from 'src/state/actions/offer_actions'
import * as offers_api from 'src/state/services/offers'
import * as types from 'src/state/actions/action_types'
import { connect } from 'src/state/api/socket'
import * as offersService from '../services/offers'

export function* get_best_offers() {
  yield takeEvery(types.GET_BEST_OFFERS_REQUEST, function* (data) {
    const { on_success } = data
    const response = yield call(offers_api.get_best_offers)
    yield put(get_best_offers_response(response))
    on_success && on_success(response)
  })
}

export function* listen_published_offers() {
  const socket = connect()
  socket.emit('subscribe_for_offers_updates')
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

export function* get_product_offers() {
  yield takeEvery(types.GET_PRODUCT_OFFERS_REQUEST, function* (data) {
    const { payload } = data
    const response = yield call(offers_api.get_product_offers, {
      ...payload,
    })
    yield put(get_product_offers_response(response))
  })
}

export function* assign_best_offer() {
  yield takeEvery(types.ASSIGN_BEST_OFFER_REQUEST, function* (payload) {
    const { on_success, on_error } = payload
    const { products } = payload
    const response = yield call(offersService.assign_best_offer, {
      products,
    })
    if (response.success) {
      yield put(assign_best_offer_response(response))
      on_success && on_success(response)
    } else {
      on_error && on_error(response.errors)
    }
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
