const initial_state = {
  products: {
    list: [],
    by_code: {}
  },
  orders: [],
  cart: {
    product: {},
    quantity: 0,
  },
  offers: {
    by_product: {},
    lowest_price_by_product: {},
  },
  auth: {
    registration: {},
  },
}

export default initial_state
