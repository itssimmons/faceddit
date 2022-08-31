import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import * as config from './env'
import notFound from './app/Http/Middlewares/NotFound'

import usersRoutes from '@/routes/auth'

const app = express()
const router = express.Router()

app.use(morgan('dev'))
app.use(cors())
app.use(json())
app.use(express.urlencoded({ extended: false }))
app.use(notFound)

router.use(usersRoutes)

app.use('/api', router)
app.use('/auth', router)

app.listen(config.APP_PORT, () => {
  console.info(`Server listening on port ${config.APP_PORT}`)
})
