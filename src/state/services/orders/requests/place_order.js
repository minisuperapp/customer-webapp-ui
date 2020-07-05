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
        this.customerLocation = {
          latitude: '',
          longitude: '',
        }
      }
      withOfferId(offerId) {
       this.offerId = offerId
       return this
      }
      withQuantity(quantity) {
       this.quantity = quantity
       return this
      }
      withCustomerLocationLatitude(latitude) {
        this.customerLocation.latitude = latitude
        return this
      }
      withCustomerLocationLongitude(longitude) {
        this.customerLocation.longitude = longitude
        return this
      }
      build() {
        return new OrderPlacementRequest(this)
      }
    }
    return Builder
  }
}
