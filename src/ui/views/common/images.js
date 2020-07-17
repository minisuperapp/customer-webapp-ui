export const getProductImageURL = product_code => {
  if (!product_code) return ''
  return `https://s3-us-west-1.amazonaws.com/minisuper.customer.images/${product_code.toLocaleLowerCase()}.png`
}
