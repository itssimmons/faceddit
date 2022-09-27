import { Router } from 'express'
import authCtrl from '@/app/Http/Controllers/auth'
import { uploadAvatar } from '@/storage'

const router = Router()

router.post('/login', authCtrl.login)
router.post('/signup', uploadAvatar, authCtrl.register)

export default router
