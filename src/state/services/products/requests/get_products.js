export class GetProductsRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'product/get_all'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {}
      build() {
        return new GetProductsRequest(this)
      }
    }
    return Builder
  }
}
