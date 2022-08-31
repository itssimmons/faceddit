import { make } from 'simple-body-validator'
import { BadRequest } from 'http-errors'
import prisma from '@prisma'
import type { RequestHandler } from 'express'
import { exclude, excludeMany } from '@/app/Helpers/exclude'
import { User } from '@prisma/client'

const all: RequestHandler = async (request, response) => {
  const posts = await prisma.post.findMany({ 
    include: {
      user: true
    }
  })

  excludeMany(posts, 'user.password')

  response.status(200).json({
    success: true,
    data: posts
  })
}

const store: RequestHandler = async (request, response) => {
  const body = request.body

  const validator = make(body, {
    description: 'required|string',
    userId: 'required|integer',
    video: 'nullable|string',
    gif: 'nullable|string',
    images: 'nullable|array',
    'images.*': 'nullable|string'
  })

  if (!validator.validate()) {
    response.status(400).json({
      success: false,
      message: validator.errors().all()
    })
    return
  }

  const userId = body.userId
  exclude(body, 'userId')
  
  const post = await prisma.post.create({ 
    data: {
      ...body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  })

  response.status(200).json({
    success: true,
    data: post
  })
}

export default { all, store }
