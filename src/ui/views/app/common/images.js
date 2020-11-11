export const getProductImageURL = product_code => {
  if (!product_code) return ''
  return `dyxnmvc23f1yf.cloudfront.net/${product_code}.png`
}
