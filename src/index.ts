import express, { type Application, type NextFunction, type Request, type Response } from 'express'

const app: Application = express()
const port: number = 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    data: 'Hello World'
  })
})
