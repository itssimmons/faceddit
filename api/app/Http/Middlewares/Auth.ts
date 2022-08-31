import jwt from '@/app/Helpers/jwt'
import { Unauthorized } from 'http-errors'
import type { RequestHandler } from 'express'

const auth: RequestHandler = async (request, response, next) => {
  if (!request.headers.authorization) {
    return next(new Unauthorized('Access token is required'))
  }

  const token = request.headers.authorization.split(' ')[1]

  if (!token) {
    return next(new Unauthorized())
  }

  await jwt
    .verifyToken(token)
    .then((user) => {
      request.body.user = user
      next()
    })
    .catch((error) => {
      next(new Unauthorized(error.message))
    })
}

export default auth
