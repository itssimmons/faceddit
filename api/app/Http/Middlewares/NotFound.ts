import { NotFound } from 'http-errors'

export default (request: any, response: any, next: any) => {
  response.status(404).json({
    success: false,
    ...new NotFound("Oops, the route you just access doesn't exists ;(")
  })
  next()
}
