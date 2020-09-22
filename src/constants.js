export const paths = {
  onboarding: {
    index: `${process.env.SUBDIR}/onboarding`,
    location: `${process.env.SUBDIR}/onboarding/location`,
  },
  app: {
    index: `${process.env.SUBDIR}/`,
    quantity: `${process.env.SUBDIR}/quantity`,
    checkout: `${process.env.SUBDIR}/checkout`,
    delivery_address: `${process.env.SUBDIR}/delivery_address`,
    change_deliverer: `${process.env.SUBDIR}/change_deliverer`,
    order: `${process.env.SUBDIR}/order`,
    orders_list: `${process.env.SUBDIR}/orders_list`,
    preferences: `${process.env.SUBDIR}/preferences`,
    cart: `${process.env.SUBDIR}/cart`,
    order_details: `${process.env.SUBDIR}/order_details`,

  },
  auth: {
    index: `${process.env.SUBDIR}/auth`,
    register: `${process.env.SUBDIR}/auth/register`,
    login: `${process.env.SUBDIR}/auth/login`,
  }
}
