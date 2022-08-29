import type { RequestHandler } from "express"

const index: RequestHandler = (request, response) => {
  response.send({
    hi: 'world!'
  })
}

const store: RequestHandler = (request, response) => {}

const update: RequestHandler = (request, response) => {}

const show: RequestHandler = (request, response) => {}

const destroy: RequestHandler = (request, response) => {}

export default {
  index,
  store,
  update,
  show,
  destroy
}