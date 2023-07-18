import Joi from 'joi'

interface ProductPayload {
  name: string
  price: number | null
}

export const createProductValidation = (payload: ProductPayload) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().allow(null)
  })
  return schema.validate(payload)
}
