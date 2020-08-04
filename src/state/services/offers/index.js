import _ from 'lodash'
import * as R from 'ramda'
import * as apiRequester from '../../api'
import { OffersGroupedByProductRequest } from './requests/search_for_all_products'
import { SearchOffersForOneProductRequest } from './requests/search_for_one_product'
import { AssignBestOfferRequest } from './requests/assign_best'
import { CHANGE_OFFER_REQUEST } from '../../actions/action_types'

export const get_best_offers = async customerLocation => {
  const offersRequest = new OffersGroupedByProductRequest.Builder()
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offersByProductResponse = await apiRequester.send(offersRequest)

  return _.get(offersByProductResponse, 'data.data.offersByProduct', {})
}

export const assign_best_offer = async ({ location, product_code, quantity }) => {
  const request = new AssignBestOfferRequest.Builder()
    .withProductCode(product_code)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(location.latitude)
    .withCustomerLocationLongitude(location.longitude)
    .build()
  const response = await apiRequester.send(request)
  return _.get(response, 'data.data', {})
}

export const get_product_offers = async payload => {
  const { location, product_code, quantity } = payload
  const request = new SearchOffersForOneProductRequest.Builder()
    .withProductCode(product_code)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(location.latitude)
    .withCustomerLocationLongitude(location.longitude)
    .build()
  const offers = await apiRequester.send(request)
  return offers.data
}

export const change_offer = async ({ product_code }) => {
  const request = new CHANGE_OFFER_REQUEST.Builder().withProductCode(product_code).build()
  const response = await apiRequester.send(request)
  return _.get(response)
}

export const addToOffersByProduct = (offersByProduct, offer) => {
  return {
    ...offersByProduct,
    [offer.product_code]: {
      ...offersByProduct[offer.product_code],
      offers: [
        ...(offersByProduct[offer.product_code] ? offersByProduct[offer.product_code].offers : []),
        offer,
      ],
    },
  }
}

export const get_lowest_price_by_product = offers_by_product => {
  return R.compose(
    R.reduce((acc, val) => {
      const id = Object.keys(val)[0]
      acc[id] = val[id]
      return acc
    }, {}),
    R.map(p => ({ [p]: offers_by_product[p].lowestUnitPrice })),
  )(Object.keys(offers_by_product))
}

export const isLowestPrice = (lowestPriceByProduct, offer) => {
  return (
    !lowestPriceByProduct[offer.product_code] ||
    Number(offer.unitPrice) < Number(lowestPriceByProduct[offer.product_code])
  )
}

export const addToLowestPriceByProduct = (lowestPriceByProduct, offer) => {
  return {
    ...lowestPriceByProduct,
    [offer.product_code]: offer.unitPrice,
  }
}
