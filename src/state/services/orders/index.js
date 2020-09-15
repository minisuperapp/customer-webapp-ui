import _get from 'lodash.get'
import * as apiRequester from '../../api'
import { OrderPlacementRequest } from './requests/place_order'
import { ListForXdayRequest } from './requests/list_for_xday'

export const place_order = async order => {
  const { customer_location_id, offers } = order
  const request = new OrderPlacementRequest.Builder()
    .withOffers(offers)
    .withCustomerLocationId(customer_location_id)
    .build()
  try {
    const response = await apiRequester.send(request)
    return response.data
  } catch (err) {
    return _get(err, 'response.data') || err
  }
}

export const get_orders_for_xday = async xday => {
  const request = new ListForXdayRequest.Builder().withXday(xday || 0).build()
  const response = await apiRequester.send(request)
  return _get(response, 'data.data.orders', [])
}
