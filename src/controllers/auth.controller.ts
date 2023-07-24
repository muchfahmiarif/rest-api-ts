import { type Request, type Response } from 'express'
import { createUserValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { hashPassword } from '../utils/hashing'

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
    value.password = `${hashPassword(value.password)}`
  } catch (error) {}
}
