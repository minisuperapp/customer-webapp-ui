module.exports = {
  API_HOST: 'https://minisuper.app/customer-api',
  // API_HOST: 'http://localhost:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
}
