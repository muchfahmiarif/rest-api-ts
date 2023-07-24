import { type IUser } from '../types/user.type'
import userModel from '../models/user.model'

export const createUserToDB = async (payload: IUser) => {
  return await userModel.create(payload)
}
