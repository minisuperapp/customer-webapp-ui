module.exports = {
  API_HOST: 'http://ec2-52-53-161-6.us-west-1.compute.amazonaws.com:3000',
  // API_HOST: 'http://localhost:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
  mocks: {
    customerLocation: {
      latitude: '28.1867048',
      longitude: '-105.4600849'
    }
  }
}
