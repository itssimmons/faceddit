import { Router } from 'express'
import postCtrl from '@/app/Http/Controllers/posts'

const router = Router()

router.get('/posts', postCtrl.all)
router.post('/posts', postCtrl.store)

export default router
