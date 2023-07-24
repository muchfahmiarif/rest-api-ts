import Joi from 'joi'
import { type IUser } from '../types/user.type'

export const createUserValidation = (payload: IUser) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    status: Joi.string().allow(null)
  })
  return schema.validate(payload)
}
