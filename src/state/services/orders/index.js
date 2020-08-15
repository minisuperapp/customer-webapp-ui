import _ from 'lodash'
import * as apiRequester from '../../api'
import { OrderPlacementRequest } from './requests/place_order'
import { PendingToDeliverRequest } from './requests/pending_to_deliver'

export const place_order = async (order) => {
  const { deliverer_id, offer_code, quantity } = order
  const request = new OrderPlacementRequest.Builder()
    .withDelivererId(deliverer_id)
    .withOfferCode(offer_code)
    .withQuantity(quantity)
    .withCustomerLocationId(order.customer_location_id)
    .build()
  const response = await apiRequester.send(request)
  return response.data
}

export const get_orders_pending_to_deliver = async () => {
  const request = new PendingToDeliverRequest.Builder().build()
  const response = await apiRequester.send(request)
  return _.get(response, 'data.data.orders', [])
}
