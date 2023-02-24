import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { JWTSECRET } from './config/env.config'
import { handleHttp } from './utils'
import { firebaseAuth } from './firebase.admin.config'

const allowed = ['/seed', '/test', '/auth/signin', '/auth/signup']

const verifyFirebaseToken = (token: string) =>
  new Promise((res, rej) => {
    firebaseAuth
      .verifyIdToken(token)
      .then(() => res(true))
      .catch(() => rej(false))
  })

const verifyJwtToken = (token: string) =>
  new Promise((res, rej) => {
    jwt.verify(token, JWTSECRET, (error: any, _decoded: any): any => {
      if (error) {
        rej(false)
      } else {
        res(true)
      }
    })
  })

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization
  const bypass = allowed.includes(req.url)

  if (bypass) next()

  if (!token && !bypass) return handleHttp(res, 'Token vacío', 400)

  if (token && !bypass) {
    await Promise.any([verifyFirebaseToken(token), verifyJwtToken(token)])
      .then(() => next())
      .catch(() => handleHttp(res, 'Token inválido', 401))
  }
}

export default authMiddleware
