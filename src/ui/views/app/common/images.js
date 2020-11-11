export const getProductImageURL = product_code => {
  if (!product_code) return ''
  return `http://dyxnmvc23f1yf.cloudfront.net/${product_code}.png`
}
