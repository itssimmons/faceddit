import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import * as config from "./env";

import usersRoutes from '@/routes/users'

const app = express()
const router = express.Router()

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))

router.use(usersRoutes)

app.use("/api", router)

app.listen(config.APP_PORT, () => {
  console.info(`Server listening on port ${config.APP_PORT}`)
})
