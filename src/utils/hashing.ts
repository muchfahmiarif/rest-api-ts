import bcrypt from 'bcrypt'

// hash password
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}

// compare password
export const comparePassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword)
}
