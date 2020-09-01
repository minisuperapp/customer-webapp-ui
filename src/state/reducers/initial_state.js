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
    offers: {
      index: {},
      grouped_by_deliverer: [],
      quantities: {}
    },
    customer_location_id: null,
    total: get_from_storage('total', '0'),
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
    return JSON.parse(localStorage.getItem(key) || sessionStorage.getItem(key) || default_value)
  } catch (err) {
    console.error({ err })
    return {}
  }
}

export default initial_state
