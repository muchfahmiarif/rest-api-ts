import { Router } from 'express'
import { createProduct, getProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

// get untuk mengambil data
ProductRouter.get('/', getProduct)

// post untuk menambah data
ProductRouter.post('/', createProduct)
