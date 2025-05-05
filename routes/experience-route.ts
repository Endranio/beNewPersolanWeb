import express from 'express'
import experience from '../controllers/experience-controllers'
const router = express.Router()

router.get("/",experience.getExperience)
router.patch("/:id",experience.updateExperienceController)
router.post("/",experience.createExperience)

export default router