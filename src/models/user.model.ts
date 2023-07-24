import { Schema, model } from 'mongoose'
import { type IUser } from '../types/user.type'

const userSchema = new Schema<IUser>(
  {
    user_id: { type: String, required: true, unique: true },
    name: { type: String, default: '' },
    email: { type: String, unique: true },
    password: { type: String, default: '' },
    role: { type: String, default: 'user' },
    status: { type: String }
  },
  { timestamps: true }
)

const userModel = model<IUser>('user', userSchema)

export default userModel
