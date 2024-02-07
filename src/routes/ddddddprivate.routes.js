import { Router } from 'express'
import {
   create,
   truncate,
   drop,
} from '../controllers/private/private.controllers.js'

const router = Router()
router.post('/create/', create)
router.post('/truncate/', truncate)
router.post('/drop/', drop)

export default router
