import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

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
