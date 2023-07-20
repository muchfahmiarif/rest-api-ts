import { type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
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

export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = [
    {
      name: 'Kopi',
      price: 10000
    },
    {
      name: 'Teh',
      price: 5000
    }
  ]

  const {
    params: { name }
  } = req

  if (name !== '') {
    const productFilter = product.filter((item) => {
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