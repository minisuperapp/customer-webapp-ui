export class SearchProductsRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'search_products'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.query = ''
      }
      build() {
        return new SearchProductsRequest(this)
      }
      withQuery(query) {
        this.query = query
        return this
      }
    }
    return Builder
  }
}
