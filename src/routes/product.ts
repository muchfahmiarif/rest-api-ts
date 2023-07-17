import { Router, type Request, type Response, type NextFunction } from 'express'

export const ProductRouter: Router = Router()

// get untuk mengambil data
ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
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
