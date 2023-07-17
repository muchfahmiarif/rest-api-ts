import express, { type Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'

const app: Application = express()
const port: number = 4000

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})

routes(app)
