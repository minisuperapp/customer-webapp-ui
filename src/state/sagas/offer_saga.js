import { take, put, takeEvery, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { get_offers_by_product_response, listen_published_offer_response } from 'src/state/actions/offer_actions'
import * as offers_api from 'src/state/services/offers'
import * as types from 'src/state/actions/action_types'
import { connect } from 'src/state/api/socket'
import * as location_api from 'src/state/services/location'

export function* get_offers_by_product() {
  yield takeEvery(types.GET_OFFERS_BY_PRODUCT_REQUEST, function* () {
    const location = yield call(location_api.get_location)
    const response = yield call(offers_api.get_offers_by_product, location)
    yield put(get_offers_by_product_response(response))
  })
}

export function* listen_published_offers() {
  const socket = connect()
  const location = yield call(location_api.get_location)
  socket.emit('subscribe_for_offers_updates', location, function () {})
  const chan = new eventChannel((emit) => {
    socket.on('published_offer', (offer) => {
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
