import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { InternalServerError, Unauthorized } from 'http-errors'
import { ACCESS_TOKEN } from '@/env'

const accessTokenSecret = ACCESS_TOKEN || ''

export default {
  signAccessToken(payload: any) {
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, accessTokenSecret, {}, (err, token) => {
        if (err) {
          reject(new InternalServerError())
        }
        resolve(token)
      })
    })
  },
  verifyAccessToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessTokenSecret, (err, payload) => {
        if (err) {
          const message =
            err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
          return reject(new Unauthorized(message))
        }
        resolve(payload)
      })
    })
  }
}
