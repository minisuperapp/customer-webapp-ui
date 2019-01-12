module.exports = {
  API_HOST: 'http://ec2-54-241-142-150.us-west-1.compute.amazonaws.com:3000',
  // API_HOST: 'http://localhost:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
}
