import express from "express";
import validate from "../middleware/validate.middleware.js";
import ArticleController from "../controllers/article.controller.js";
import { createArticleSchema } from "../validation/article.validation.js";

const router = express.Router();
router.post("/articles", validate(createArticleSchema), new ArticleController().createArticle);
router.get("/articles", new ArticleController().getArticles);
router.get("/articles/:id", new ArticleController().getArticleById);

export default router;