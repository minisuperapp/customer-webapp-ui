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
        this.customer_location_id = null
      }
      withDelivererId(deliverer_id) {
        this.deliverer_id = deliverer_id
        return this
      }
      withOfferCodeAndQuantity(offer_code, quantity) {
        this.offers = {
          ...this.offers,
          [offer_code]: {
            quantity,
          },
        }
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
