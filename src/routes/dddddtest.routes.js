import { Router } from 'express'
import { File } from '../controllers/test/file_process.controllers.js'

const router = Router()

router.post('/', File)
/*
router.post("/",        Test_Insert);
router.get("/",         Test_Select_All);
router.get("/:id",      Test_Select_Id);
router.patch("/:id",    Test_Update);
router.delete("/:id",   Test_Delete);
*/

export default router
