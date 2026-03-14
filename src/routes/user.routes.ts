import express from "express";
import UserController from "../controllers/user.controller.js";
import validate from "../middleware/validate.middleware.js";
import { userSchema } from "../validation/user.validation.js";

const router = express.Router();

router.post("/users", validate(userSchema), new UserController().createUser);
router.get("/users", new UserController().getUsers);

export default router;