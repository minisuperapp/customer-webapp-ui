import * as R from 'ramda'
import config from 'src/config'
import * as apiRequester from 'src/services/api_requester'
import { OffersGroupedByProductRequest } from './requests/offers_grouped_by_product'
import { ListOffersRequest } from './requests/list'
import { AssignBestOfferRequest } from './requests/assign_best'

export const getOffersByProduct = async (customerLocation) => {
  const offersRequest = new OffersGroupedByProductRequest.Builder()
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offersByProductResponse = await apiRequester.send(offersRequest)
  return offersByProductResponse.data.data.offersByProduct
}

export const assignBestOffer = async (customerLocation, productCode, quantity) => {
  const request = new AssignBestOfferRequest.Builder()
    .withProductCode(productCode)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offers = await apiRequester.send(request)
  return offers.data
}

export const getOffers = async (customerLocation, productCode, quantity) => {
  const request = new ListOffersRequest.Builder()
    .withProductCode(productCode)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offers = await apiRequester.send(request)
  return offers.data
}

export const addToOffersByProduct = (offersByProduct, offer) => {
  return {
    ...offersByProduct,
    [offer.productCode]: {
      ...offersByProduct[offer.productCode],
      offers: [
        ...(offersByProduct[offer.productCode]
          ? offersByProduct[offer.productCode].offers
          : []),
        offer
      ]
    }
  }
}

export const getLowestPriceByProduct = async offersByProduct => {
  return R.compose(
    R.reduce((acc, val) => {
      const id = Object.keys(val)[0]
      acc[id] = val[id]
      return acc
    }, {}),
    R.map(p => ({ [p]: offersByProduct[p].lowestUnitPrice }))
  )(Object.keys(offersByProduct))
}

export const isLowestPrice = (lowestPriceByProduct, offer) => {
  return (
    !lowestPriceByProduct[offer.productCode] ||
    Number(offer.unitPrice) < Number(lowestPriceByProduct[offer.productCode])
  )
}

export const addToLowestPriceByProduct = (lowestPriceByProduct, offer) => {
  return {
    ...lowestPriceByProduct,
    [offer.productCode]: offer.unitPrice
  }
}