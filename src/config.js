module.exports = {
  get API_HOST() {
    return 'https://minisuper-customer-api.herokuapp.com'
  },
  get API_URL() {
    return `${this.API_HOST}/api`
  },
  get isTestEnv() {
    return !(
      /^https:\/\/www\.minisuper\.app\/buy/.test(window.location.href) ||
      /^https:\/\/minisuper\.app\/buy/.test(window.location.href) ||
      /^https:\/\/minisuper-customer-webapp-ui\.herokuapp\.com/.test(window.location.href)
    )
  },
  get isApiHostProd() {
    return (
      /^https:\/\/www\.minisuper\.app\/buy/.test(this.API_HOST) ||
      /^https:\/\/minisuper\.app\/buy/.test(this.API_HOST) ||
      /^https:\/\/minisuper-customer-api\.herokuapp\.com/.test(this.API_HOST)
    )
  },
  get socketPayload() {
    const payload = {}
    if (this.isTestEnv) {
      payload.query = 'is-test=true'
    }
    return payload
  }
}
