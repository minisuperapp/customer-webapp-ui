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
        this.offerId = ''
        this.quantity = ''
        this.customer_location_id = null
      }
      withOfferId(offerId) {
        this.offerId = offerId
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
