import Router from "express";
import userController from "../controllers/user-controller.js";
const router = new Router();
import { body } from "express-validator";
import authMiddleware from "../middleware/auth-middleware.js";

router.post(
  "/register",
  body("email").isEmpty(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.register
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

export default router;
