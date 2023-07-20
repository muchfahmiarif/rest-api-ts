import productModel from '../models/product.model'

export const getProductFromDB = async () => {
  productModel
    .find()
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
}
