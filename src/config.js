module.exports = {
  API_HOST: 'https://minisuper.app:3300',
  // API_HOST: 'http://localhost:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
}
