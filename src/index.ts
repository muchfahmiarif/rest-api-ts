import express, { type Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port: number = 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

routes(app)
