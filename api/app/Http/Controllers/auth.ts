import { make } from 'simple-body-validator'
import { BadRequest, NotFound, Unauthorized } from 'http-errors'
import { hash, compare } from 'bcryptjs'
import prisma from '@prisma'
import jwt from '@/app/Helpers/jwt'
import type { RequestHandler } from 'express'
import { exclude } from '@/app/Helpers/exclude'
import { STORAGE_DIR } from '@/env'
import storage from '@/app/Helpers/storage'

const login: RequestHandler = async (request, response, next) => {
  const body = request.body

  const validator = make(body, {
    email: 'required|email',
    password: 'required|string'
  })

  if (!validator.validate()) {
    response.status(400).json({
      success: false,
      message: validator.errors().all()
    })
    return
  }

  const { email, password } = body
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    response.status(404).json({
      success: false,
      message: 'User not found'
    })
    return
  }

  const checkPassword = await compare(password, user.password as string)

  if (!checkPassword) {
    response.status(401).json({
      success: false,
      message: 'Email address or password are not valid'
    })
    return
  }

  exclude(user, 'password')

  const token = await jwt.signToken(user)

  response.status(200).json({
    success: true,
    data: user,
    token
  })
  next()
}

const register: RequestHandler = async (request, response, next) => {
  const body = request.body

  const validator = make(body, {
    name: 'required|string',
    email: 'required|email',
    password: 'required|string|min:8',
    photo: 'nullable|string'
  })

  if (!validator.validate()) {
    response.status(400).json({
      success: false,
      message: validator.errors().all()
    })
    next()
    return
  }

  if (request.file) {
    body.photo = storage.resolve({ 
      dir: `${STORAGE_DIR}/avatars`,
      filename: request.file.filename,
      host: request.get('host') as string,
      protocol: request.protocol
    })
  }

  const user = await prisma.user.create({
    data: {
      ...body,
      password: await hash(body.password, 6)
    }
  })

  exclude(user, 'password')

  body.token = await jwt.signToken(user)

  response.status(200).json({
    success: true,
    data: body
  })
}

export default { login, register }
