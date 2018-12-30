import config from 'src/config'
import * as apiRequester from 'src/services/api_requester'
import { OrderPlacementRequest } from './requests/place_order'

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

