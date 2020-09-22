import * as types from './action_types'

export const get_best_offers_request = on_success => ({
  type: types.GET_BEST_OFFERS_REQUEST,
  on_success,
})

export function get_best_offers_response(response) {
  return { type: types.GET_BEST_OFFERS_RESPONSE, response }
}

export function listen_published_offer_response(offer) {
  return { type: types.LISTEN_PUBLISHED_OFFER_RESPONSE, offer }
}

export const assign_best_offer_request = (products, on_success, on_error) => ({
  type: types.ASSIGN_BEST_OFFER_REQUEST,
  products,
  on_success,
  on_error,
})

export function assign_best_offer_response(response) {
  return { type: types.ASSIGN_BEST_OFFER_RESPONSE, response }
}

export const get_product_offers_request = payload => ({
  type: types.GET_PRODUCT_OFFERS_REQUEST,
  payload,
})

export function get_product_offers_response(response) {
  return { type: types.GET_PRODUCT_OFFERS_RESPONSE, response }
}

export const change_offer_request = (payload, success) => {
  return { type: types.CHANGE_OFFER_REQUEST, payload, success }
}

export function change_offer_response(response) {
  return { type: types.CHANGE_OFFER_RESPONSE, response }
}
