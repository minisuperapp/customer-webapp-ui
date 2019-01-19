export class DiscardAssignmentRequest {
  constructor(build) {
    this.offerId = build.offerId
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/discard_assignment'
  }
  get payload() {
    return {
      offerId: this.offerId,
    }
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.offerId = ''
      }
      withOfferId(offerId) {
        this.offerId = offerId
        return this
      }
      build() {
        return new DiscardAssignmentRequest(this)
      }
    }
    return Builder
  }
}
