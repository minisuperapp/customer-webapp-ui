import * as types from './action_types'

export const get_best_offers_request = (customer_location) => ({
  type: types.GET_BEST_OFFERS_REQUEST,
  customer_location,
})

export function get_best_offers_response(response) {
  return { type: types.GET_BEST_OFFERS_RESPONSE, response }
}

export function listen_published_offer_response(offer) {
  return { type: types.LISTEN_PUBLISHED_OFFER_RESPONSE, offer }
}

export const assign_best_offer_request = (data) => ({
  type: types.ASSIGN_BEST_OFFER_REQUEST,
  data,
})

export function assign_best_offer_response(response) {
  return { type: types.ASSIGN_BEST_OFFER_RESPONSE, response }
}

