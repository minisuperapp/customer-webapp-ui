const initial_state = {
  products: {
    list: [],
    by_code: {},
  },
  orders: [],
  cart: {
    product: JSON.parse(localStorage.getItem('cart_product') || '{}'),
    quantity: localStorage.getItem('cart_quantity') || 0,
    offer: {},
    product_offers: {},
  },
  best_offers: {
    by_product: {},
    lowest_price_by_product: {},
  },
  auth: {
    registration: {},
    login: {},
  },
}

export default initial_state
