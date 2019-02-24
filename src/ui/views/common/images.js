export const getProductImageURL = (productCode) => {
  return `https://s3.us-west-1.amazonaws.com/minisuper.images/${productCode}_available.png`
}