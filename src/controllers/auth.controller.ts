import { type Request, type Response } from 'express'
import { createSessionValidation, createUserValidation } from '../validations/auth.validation'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { comparePassword, hashPassword } from '../utils/hashing'
import { createUserToDB, findUserByEmailFromDB } from '../services/auth.service'
import { signJWT } from '../utils/jwt'

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
  logger.info('Success add user data', value)

  try {
    value.password = await hashPassword(value.password)

    const data = await createUserToDB(value)
    return res.status(201).json({
      status: true,
      statusCode: 201,
      message: 'Success add user data',
      data
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

export const createSession = async (req: Request, res: Response) => {
  const { error, value } = createSessionValidation(req.body)
  if (error) {
    logger.error('Error create session', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: null
    })
  }

  // logger.info('Success create session', value)

  try {
    const user: any = await findUserByEmailFromDB(value.email)
    const isValid = comparePassword(value.password, user.password)
    if (!isValid) {
      return res.status(401).json({
        status: false,
        statusCode: 401,
        message: 'Invalid email or password',
        data: null
      })
    }
    // generate access token
    const accessToken = signJWT({ ...user }, { expiresIn: '1d' })
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Success create session',
      data: {
        accessToken
      }
    })
  } catch (error) {
    logger.error('Error create session', error)
    return res.status(422).json({
      status: false,
      statusCode: 422,
      message: 'Internal Server Error',
      data: null
    })
  }
}
