import express from 'express'
import experience from '../controllers/experience-controllers'
import {upload} from '../middlewares/image-middleware'

const router = express.Router()

router.get("/",experience.getExperience)
router.patch("/:id",upload.single('image'),experience.updateExperienceController)
router.post("/",upload.single('image'),experience.createExperience)

export default router 