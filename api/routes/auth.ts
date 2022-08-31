import { Router } from 'express'
import authCtrl from '@/app/Http/Controllers/auth'

const router = Router()

router.post('/login', authCtrl.login)
router.post('/signup', authCtrl.register)

export default router
