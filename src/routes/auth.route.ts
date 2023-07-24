import { Router } from 'express'
import { createUser } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

// post untuk menambah data
AuthRouter.post('/register', createUser)
