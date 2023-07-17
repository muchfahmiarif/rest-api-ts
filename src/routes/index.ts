import { type Application, type Router } from 'express'
import { HealthRouter } from './health'
import { ProductRouter } from './product'

const _routes: Array<[string, Router]> = [
  ['/health', HealthRouter],
  ['/product', ProductRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [path, router] = route
    app.use(path, router)
  })
}
