import express from 'express'
import Profile from '../controllers/profile-controller'
import {upload} from '../middlewares/image-middleware'
const router = express.Router()

router.get("/",Profile.getProfile)
router.patch("/",upload.single('image'),Profile.updateProfileController)

export default router