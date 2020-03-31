export const getProductImageURL = (product_code) => {
  return `https://s3.us-west-1.amazonaws.com/minisuper.images/${product_code}_available.png`
}
