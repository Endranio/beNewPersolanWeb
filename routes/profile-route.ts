import express from 'express'
import Profile from '../controllers/profile-controller'
import {cloudinaryStorage} from '../middlewares/image-middleware'
// import AuthCheck from '../middlewares/auth-middleware'
const router = express.Router()

router.get("/",Profile.getProfile)
router.patch("/",Profile.updateProfileController)

export default router