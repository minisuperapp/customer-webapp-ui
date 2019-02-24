export const getProductImageURL = (productCode) => {
  return `url('https://s3.us-west-1.amazonaws.com/minisuper.images/${productCode}_available.jpg')`
}