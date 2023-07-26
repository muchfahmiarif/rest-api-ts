import jwt from 'jsonwebtoken'
import CONFIG from '../config/environment'

export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, CONFIG.private_key, {
    ...(options && options),
    algorithm: 'RS256'
  })
}
