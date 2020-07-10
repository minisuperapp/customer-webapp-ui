export const getProductImageURL = (product_code) => {
  return `https://s3-us-west-1.amazonaws.com/minisuper.customer.images/${product_code}.png`
}
