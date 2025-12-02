import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { courseValidation } from "./course.validation";
import { courseController } from "./course.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(courseValidation.createCourseSchema),
  courseController.createCourse
);
export const courseRoutes = router;
