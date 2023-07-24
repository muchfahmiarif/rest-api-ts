import bcrypt from 'bcrypt'

// hash password
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}
