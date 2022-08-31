import { make } from 'simple-body-validator'
import { BadRequest, NotFound, Unauthorized } from 'http-errors'
import { hash, compare } from 'bcryptjs'
import prisma from '@prisma'
import jwt from '@/app/Helpers/jwt'
import type { RequestHandler } from 'express'
import { exclude } from '@/app/Helpers/exclude'

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

const register: RequestHandler = async (request, response) => {
  const body = request.body

  const validator = make(body, {
    name: 'required|string',
    email: 'required|email',
    password: 'required|string',
    photo: 'nullable|string'
  })

  if (!validator.validate()) {
    response.status(400).json({
      success: false,
      message: validator.errors().all()
    })
    return
  }

  const user = await prisma.user.create({
    data: {
      ...body,
      password: await hash(body.password, 6)
    }
  })

  body.token = await jwt.signToken(user)

  exclude(user, 'password')

  response.status(200).json({
    success: true,
    data: user
  })
}

export default { login, register }
