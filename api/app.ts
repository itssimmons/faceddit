import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import * as config from '@/env'
import authRoutes from '@/routes/auth'
import postRoutes from '@/routes/posts'
import auth from '@/app/Http/Middlewares/Auth'

const app = express()
const router = express.Router()
const authRouter = express.Router()

app.use(morgan('dev'))
app.use(cors())
app.use(json())
app.use(express.urlencoded({ extended: false }))

router.use(postRoutes)

authRouter.use(authRoutes)

app.use('/auth', authRouter)
app.use('/api', auth, router)

app.listen(config.APP_PORT, () => {
  console.info(`Server listening on port ${config.APP_PORT}`)
})
