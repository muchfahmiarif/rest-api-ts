import { Router } from 'express'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

// get untuk mengambil data
ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)

// post untuk menambah data
ProductRouter.post('/', createProduct)

// put untuk mengubah data
ProductRouter.put('/:id', updateProduct)

// delete untuk menghapus data
ProductRouter.delete('/:id', deleteProduct)
