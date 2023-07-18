import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const ProductRouter: Router = Router()

// get untuk mengambil data
ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success',
    data: [
      {
        name: 'Kopi',
        price: 10000
      },
      {
        name: 'Teh',
        price: 5000
      }
    ]
  })
})

// post untuk menambah data
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
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
})
