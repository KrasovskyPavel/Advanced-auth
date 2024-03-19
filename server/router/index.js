import Router from "express";
import userController from "../controllers/user-controller.js";
const router = new Router();
import { body } from "express-validator";

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
router.get("/users", userController.getUsers);

export default router;
