import express from 'express'
import projectController from '../controllers/project-controllers'
import {upload} from '../middlewares/image-middleware'


const router = express.Router()

router.get('/',projectController.getAllProject)
router.post("/",upload.single('image') ,projectController.createProject)
router.patch("/:id",upload.single('image'),projectController.updateProject)
router.delete("/:id",projectController.deleteProject)

export default router