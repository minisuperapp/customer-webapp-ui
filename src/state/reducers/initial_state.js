const initial_state = {
  location: {
    latitude: localStorage.getItem('latitude') || '',
    longitude: localStorage.getItem('longitude') || '',
    zoom: localStorage.getItem('zoom') || '10',
  },
  alert: {
    message: '',
  },
  products: {
    list: [],
    by_code: {},
    query: null,
  },
  orders: [],
  cart: {
    products: [],
    quantity: localStorage.getItem('cart_quantity') || 0,
    offer: {},
    product_offers: {},
    customer_location_id: null,
  },
  best_offers: {
    by_product: {},
    lowest_price_by_product: {},
  },
  auth: {
    registration: {},
    login: {},
  },
  customer_locations: [],
}

export default initial_state
