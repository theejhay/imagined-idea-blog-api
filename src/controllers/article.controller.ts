import { Request, Response } from "express";
import ArticleService from "../services/article.service.js";
import asyncHandler from "../middleware/asyncHandler.js";

class ArticleController {
    service = new ArticleService();

    createArticle = asyncHandler(async (req: Request, res: Response) => {
        const article = await this.service.createArticle(req.body);
        res.status(201).json({
            success: true,
            data: article
        });
    });

    getArticles = asyncHandler(async (req: Request, res: Response) => {
        const articles = await this.service.getArticles();
        res.json({
            success: true,
            data: articles
        });
    });

    getArticleById = asyncHandler(async (req: Request, res: Response) => {
        const article = await this.service.getArticleById(req.params.id);
        res.json({
            success: true,
            data: article
        });
    });
}

export default ArticleController;