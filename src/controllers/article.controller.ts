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

    getArticlesByUserId = asyncHandler(async (req: Request, res: Response) => {
        const articles = await this.service.getArticlesByUserId(req.params.userId);
        res.json({
            success: true,
            data: articles
        });
    });

    getArticlesWithComments = asyncHandler(async (req: Request, res: Response) => {
        const articles = await this.service.getArticlesWithComments();
        res.json({
            success: true,
            data: articles
        });
    });
}

export default ArticleController;