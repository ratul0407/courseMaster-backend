import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { courseController } from "./course.controller";
import { CourseSchema } from "./course.validation";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post(
  "/create",
  checkAuth(Role.ADMIN),
  validateRequest(CourseSchema),
  courseController.createCourse
);
router.get("/", courseController.getAllCourse);
export const courseRoutes = router;
