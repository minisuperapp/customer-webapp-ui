import _ from 'lodash'
import * as apiRequester from 'src/services/api_requester'
import { OrderPlacementRequest } from './requests/place_order'
import { PendingToDeliverRequest } from './requests/pending_to_deliver'

export const placeOrder = async (customerLocation, offerId, quantity) => {
  const request = new OrderPlacementRequest.Builder()
    .withOfferId(offerId)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const response = await apiRequester.send(request)
  return response.data
}

export const getOrdersPendingToDeliver = async () => {
  const request = new PendingToDeliverRequest.Builder()
    .build()
  const response = await apiRequester.send(request)
  return _.get(response, 'data.data.orders', [])
}


