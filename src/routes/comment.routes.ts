import express from "express";

import CommentController from "../controllers/comment.controller.js";
import validate from "../middleware/validate.middleware.js";
import { createCommentSchema } from "../validation/comment.validation.js";

const router = express.Router();

router.post("/comments", validate(createCommentSchema), new CommentController().createComment);
router.get("/comments/:articleId", new CommentController().getCommentsByArticleId);

export default router;