import prisma from '@prisma'
import { make } from 'simple-body-validator'
import { hashSync, compareSync } from 'bcryptjs'
import { BadRequest, NotFound, Unauthorized } from 'http-errors'
import jwt from '@/app/Http/Middlewares/jwt'
import type { RequestHandler } from 'express'

const all: RequestHandler = async (request, response) => {
  const users = await prisma.user.findMany({})

  response.status(200).json({
    success: true,
    data: users
  })
}

const login: RequestHandler = async (request, response) => {
  const { email, password } = request.body

  const user = await prisma.user.findUnique({ where: { email }});

  if (!user) {
      throw new NotFound('User not registered')
  }

  const checkPassword = compareSync(password, user.password as string)

  if (!checkPassword) {
    response.status(401).json({
      success: false,
      message: new Unauthorized('Email address or password not valid')
    })
  }

  // @ts-ignore
  delete user.password 

  const accessToken = await jwt.signAccessToken(user)
  response.status(200).json({
    success: true,
    data: user,
    accessToken
  })
}

const signup: RequestHandler = async (request, response) => {
  const body = request.body

  const validator = make(body, {
    name: 'required|string',
    email: 'required|email',
    password: 'required|string',
    photo: 'nullable|string'
  })

  if (!validator.validate()) {
    const errors = JSON.stringify(validator.errors().all())
    response.status(400).json({
      success: false,
      message: new BadRequest(errors)
    })
    return
  }

  const user = await prisma.user.create({
    data: {
      ...body,
      password: hashSync(body.password, 16)
    }
  })

  body.accessToken = await jwt.signAccessToken(user);

  response.status(200).json({
    success: true,
    data: user
  })
}

export default { all, login, signup }
