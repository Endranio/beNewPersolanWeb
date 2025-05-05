import express from "express";
import profileRouter from "./profile-route";
import techRouter from "./tech-route";
import experienceRouter from "./experience-route";
import projectRouter from './project-route'

const router = express.Router();

router.use("/profile", profileRouter);
router.use("/techs", techRouter);
router.use("/experience", experienceRouter);
router.use("/project",projectRouter)

export default router;
