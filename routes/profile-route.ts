import express from 'express'
import Profile from '../controllers/profile-controller'

const router = express.Router()

router.get("/",Profile.getProfile)
router.patch("/",Profile.updateProfileController)

export default router