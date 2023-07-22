import { type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createProductToDB, getProductByIdFromDB, getProductFromDB, updateProductByIdFromDB } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error != null) {
    logger.error('Error add product data', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: null
    })
  }

  try {
    await createProductToDB(value)
    logger.info('Success add product data')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Add Data Success',
      data: value // value = req.body, tetapi value hasil validasi dari createProductValidation
    })
  } catch (error) {
    logger.error('Error add product data', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'Internal Server Error',
      data: null
    })
  }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  const {
    params: { id }
  } = req

  if (id) {
    const product: any = await getProductByIdFromDB(id)
    if (product) {
      // if product found
      logger.info('Success get detail product data')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success',
        data: product
      })
    } else {
      // if product not found
      logger.error('Error get detail product data', 'Product Not Found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Product Not Found',
        data: null
      })
    }
  } else {
    const product: any = await getProductFromDB()
    logger.info('Success get all product data')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Success',
      data: product
    })
  }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: { id }
  } = req

  const { error, value } = updateProductValidation(req.body)
  if (error != null) {
    logger.error('Error add product data', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: null
    })
  }

  try {
    console.log(value)
    // await updateProductByIdFromDB(id, value)
    logger.info('Success update product data')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Update Data Success',
      data: value // value = req.body, tetapi value hasil validasi dari updateProductValidation
    })
  } catch (error) {}
}
