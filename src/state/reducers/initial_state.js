const initial_state = {
  products: {
    list: [],
    by_code: {},
    filtered: {
      by_code: []
    }
  },
  orders: [],
  cart: {
    product: JSON.parse(localStorage.getItem('cart_product') || '{}'),
    quantity: localStorage.getItem('cart_quantity') || 0,
  },
  offers: {
    by_product: {},
    lowest_price_by_product: {},
    assigned: {},
  },
  auth: {
    registration: {},
  },
}

export default initial_state
