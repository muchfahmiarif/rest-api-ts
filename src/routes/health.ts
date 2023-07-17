import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

// get untuk mengambil data
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Helath check success')
  res.status(200).json({
    data: 'Hello World'
  })
})
