import { Router } from 'express'
import { create, createTable } from '../controllers/secure/create.js'
import { truncate, truncateTable } from '../controllers/secure/truncate.js'
import { drop, dropTable } from '../controllers/secure/drop.js'
import { data, dataTable } from '../controllers/secure/data.js'
const router = Router()

router.post('/create', create)
router.post('/create/:table', createTable)

router.post('/truncate', truncate)
router.post('/truncate/:table', truncateTable)

router.post('/drop', drop)
router.post('/drop/:table', dropTable)

router.post('/data', data)
router.post('/data/:table', dataTable)

export default router
