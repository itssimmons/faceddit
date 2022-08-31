import jwt from 'jsonwebtoken'
import { InternalServerError, Unauthorized } from 'http-errors'
import { SECRET_KEY } from '@/env'

const ACCESS_TOKEN_SECRET = SECRET_KEY || ''

const errors: { [key: string]: string } = {
  JsonWebTokenError: 'Unauthorized'
}

export default {
  signToken(payload: any) {
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, ACCESS_TOKEN_SECRET, {}, (error, token) => {
        if (error) reject(new InternalServerError())
        resolve(token)
      })
    })
  },
  verifyToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, ACCESS_TOKEN_SECRET, (error, payload) => {
        if (error) {
          const message = errors?.[error.name] ?? error.message
          return reject(new Unauthorized(message))
        }
        resolve(payload)
      })
    })
  }
}
