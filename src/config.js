module.exports = {
  get API_HOST() {
    return process.env.API_HOST
  },
  get SOCKET_HOST() {
    return process.env.SOCKET_HOST
  },
  get API_URL() {
    return `${this.API_HOST}/customer`
  },
  get isTestEnv() {
    return !(
      /^https:\/\/www\.minisuper\.com\.mx\/comprar/i.test(window.location.href) ||
      /^https:\/\/minisuper\.com\.mx\/comprar/i.test(window.location.href)
    )
  },
  get isApiHostProd() {
    return (
      /^https:\/\/www\.minisuper\.com\.mx\/customer_api/.test(this.API_HOST) ||
      /^https:\/\/minisuper\.com\.mx\/customer_api/.test(this.API_HOST)
    )
  },
  get socketPayload() {
    const payload = {}
    if (this.isTestEnv) {
      payload.query = 'is-test=true'
    }
    return payload
  },
  get socket_path() {
    if (this.isTestEnv) {
      return ''
    }
    return '/customer_api/socket.io/'
  },
  get disable_logrocket() {
    return localStorage.getItem('disable_logrocket')
  }
}
