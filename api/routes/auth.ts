import { Router } from 'express'
import authCtrl from '../app/Http/Controllers/auth'

const router = Router()

router.get('/', authCtrl.all)
router.get('/login', authCtrl.login)
router.post('/signup', authCtrl.signup)

export default router
