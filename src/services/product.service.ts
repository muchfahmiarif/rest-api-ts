import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import { type ProductType } from '../types/product.type'

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Error get product data', error)
      logger.error(error)
    })
}

export const createProductToDB = async (payload: ProductType) => {
  return await productModel.create(payload) // model from mongoose
}

export const getProductByIdFromDB = async (id: string) => {
  return await productModel
    .findOne({ product_id: id })
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Error get product data', error)
      logger.error(error)
    })
}

export const updateProductByIdFromDB = async (id: string, payload: ProductType) => {
  return await productModel
    .findOneAndUpdate({ product_id: id }, { $set: payload })
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Error get product data', error)
      logger.error(error)
    })
}
