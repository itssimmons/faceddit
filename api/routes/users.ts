import { Router } from "express"
import userCtrl from "../app/Http/Controllers/users"

const router = Router()

router.get('/users', userCtrl.index)
router.post('/users', userCtrl.store)
router.put('/users/:id', userCtrl.update)
router.get('/users/:id', userCtrl.show)
router.delete('/users/:id', userCtrl.destroy)

export default router
