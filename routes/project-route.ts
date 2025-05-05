import express from 'express'
import projectController from '../controllers/project-controllers'


const router = express.Router()

router.get('/',projectController.getAllProject)
router.post("/",projectController.createProject)
router.patch("/:id",projectController.updateProject)

export default router