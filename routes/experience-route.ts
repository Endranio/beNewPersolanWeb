import express from 'express'
import experience from '../controllers/experience-controllers'
import {cloudinaryStorage} from '../middlewares/image-middleware'

const router = express.Router()

router.get("/",experience.getExperience)
router.patch("/:id",experience.updateExperienceController)
router.post("/",experience.createExperience)
router.delete("/:id",experience.deleteExperience)

export default router 