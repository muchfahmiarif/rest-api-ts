import { Router, type Request, type Response, type NextFunction } from 'express'

export const HealthRouter: Router = Router()

// get untuk mengambil data
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    data: 'Hello World'
  })
})
