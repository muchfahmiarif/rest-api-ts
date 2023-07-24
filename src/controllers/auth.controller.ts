import { type Request, type Response } from 'express'
import { createUserValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { hashPassword } from '../utils/hashing'
import { createUserToDB } from '../services/auth.service'

export const createUser = async (req: Request, res: Response) => {
  req.body.user_id = uuidv4()
  const { error, value } = createUserValidation(req.body)
  if (error != null) {
    logger.error('Error add user data', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: null
    })
  }

  try {
    value.password = await hashPassword(value.password)

    const data = await createUserToDB(value)
    return res.status(201).json({
      status: true,
      statusCode: 201,
      message: 'Success add user data',
      data: data
    })
  } catch (error) {
    logger.error('Error add user data', error)
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Internal Server Error',
      data: null
    })
  }
}
