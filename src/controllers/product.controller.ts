import { type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { getProductFromDB } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'
import { type ProductType } from '../types/product.type'

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error != null) {
    logger.error('Error add product data', error.details[0].message)
    res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: null
    })
  }
  logger.info('Success add product data')
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success',
    data: value // value = req.body, tetapi value hasil validasi dari createProductValidation
  })
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product: any = await getProductFromDB()

  const {
    params: { name }
  } = req

  if (name !== '') {
    const productFilter = product.filter((item: ProductType) => {
      if (item.name === name) {
        return item
      }
    })
    logger.info('Success get product data')
    res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Success',
      data: productFilter
    })
  }

  logger.info('Success get all product data')
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success',
    data: product
  })
}
