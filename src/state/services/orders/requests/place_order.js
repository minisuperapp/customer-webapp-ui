export class OrderPlacementRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'order/place'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.deliverer_id = null
        this.offer_codes = []
        this.quantity = ''
        this.customer_location_id = null
      }
      withDelivererId(deliverer_id) {
        this.deliverer_id = deliverer_id
        return this
      }
      withOfferCode(offer_code) {
        this.offer_codes.push(offer_code)
        return this
      }
      withQuantity(quantity) {
        this.quantity = quantity
        return this
      }
      withCustomerLocationId(customer_location_id) {
        this.customer_location_id = customer_location_id
        return this
      }
      build() {
        return new OrderPlacementRequest(this)
      }
    }
    return Builder
  }
}
