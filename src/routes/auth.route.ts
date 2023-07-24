import { Router } from 'express'
import { createUser, createSession } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

// post untuk menambah data
AuthRouter.post('/register', createUser)

// access token
AuthRouter.post('/login', createSession)
