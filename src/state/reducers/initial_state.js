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
    by_code: get_from_storage('products_by_code', '{}'),
    query: null,
  },
  orders: [],
  cart: {
    products: get_from_storage('cart_products', '{}'),
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

function get_from_storage(key, default_value) {
  try {
    return JSON.parse(localStorage.getItem(key) || default_value)
  } catch (err) {
    console.log({ err })
    return {}
  }
}

export default initial_state
