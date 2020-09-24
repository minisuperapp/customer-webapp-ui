const initial_state = {
  location: {
    longitude: -102.552788,
    latitude: 23.634501,
    zoom: 3,
    postal_area_code: '',
    postal_area_name: '',
    postal_area_county: '',
    postal_area_state: '',
  },
  alert: {
    message: '',
    ok_button_name: 'OK',
    on_accept: () => true,
    hide_no_offers_alert: false,
  },
  products: {
    list: [],
    by_code: get_from_storage('products_by_code', '{}'),
    query: null,
    best_offers_by_product: {},
    lowest_price_by_product: {},
  },
  orders: [],
  cart: {
    products: get_from_storage('cart_products', '{}'),
    offers: {
      index: {},
      grouped_by_deliverer: [],
      quantities: {},
    },
    customer_address_id: null,
    total: get_from_storage('total', '0'),
  },
  auth: {
    registration: {},
    login: {},
  },
  customer_addresses: [],
  profile: {
    phone_number: '',
    email: '',
  },
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
