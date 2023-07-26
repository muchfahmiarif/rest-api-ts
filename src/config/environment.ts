import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  public_key: `${process.env.PUBLIC_KEY}`,
  private_key: `${process.env.PRIVATE_KEY}`
}

export default CONFIG
