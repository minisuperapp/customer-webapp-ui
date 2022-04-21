export class SearchOffersForOneProductRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offer/search_for_one_product'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.product_code = ''
        this.quantity = ''
      }
      withProductCode(product_code) {
       this.product_code = product_code
       return this
      }
      withQuantity(quantity) {
       this.quantity = quantity
       return this
      }
      build() {
        return new SearchOffersForOneProductRequest(this)
      }
    }
    return Builder
  }
}
