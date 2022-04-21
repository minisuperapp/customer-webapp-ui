export class AssignBestOfferRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offer/assign_best'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.products = []
      }
      withProductCodeAndQuantity(product_code, quantity) {
        this.products.push({
          code: product_code,
          quantity: quantity,
        })
        return this
      }
      build() {
        return new AssignBestOfferRequest(this)
      }
    }
    return Builder
  }
}
