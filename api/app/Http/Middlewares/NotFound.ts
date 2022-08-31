import { NotFound } from 'http-errors'

export default (req: any, res: any, next: any) => {
  next(new NotFound("Oops, the route you just access doesn't exists ;("))
}
