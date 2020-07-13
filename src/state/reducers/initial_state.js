const initial_state = {
  products: {
    list: [],
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
