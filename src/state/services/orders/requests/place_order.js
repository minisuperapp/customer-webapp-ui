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
        this.offers = {}
        this.customer_address_id = null
      }
      withDelivererId(deliverer_id) {
        this.deliverer_id = deliverer_id
        return this
      }
      withOffers(offers) {
        this.offers = offers
        return this
      }
      withCustomerLocationId(customer_address_id) {
        this.customer_address_id = customer_address_id
        return this
      }
      build() {
        return new OrderPlacementRequest(this)
      }
    }
    return Builder
  }
}
