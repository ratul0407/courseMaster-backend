import { Router } from "express";
import { userController } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";
const router = Router();

router.post("/", userController.createUser);
router.get("/me", checkAuth(...Object.values(Role)), userController.getMe);
export const userRoutes = router;
