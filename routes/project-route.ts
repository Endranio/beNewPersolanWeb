import express from 'express'
import projectController from '../controllers/project-controllers'
import {cloudinaryStorage} from '../middlewares/image-middleware'
// import AuthCheck from '../middlewares/auth-middleware'


const router = express.Router()

router.get('/',projectController.getAllProject)
router.post("/" ,projectController.createProject)
router.patch("/:id",projectController.updateProject)
router.delete("/:id",projectController.deleteProject)

export default router