import {Request, Response} from "express";
import CommentService from "../services/comment.service.js";
import asyncHandler from "../middleware/asyncHandler.js";

class CommentController {
    service = new CommentService();

    createComment = asyncHandler(async (req: Request, res: Response) => {
        const comment = await this.service.createComment(req.body);
        res.status(201).json({
            success: true,
            data: comment
        });
    });

    getCommentsByArticleId = asyncHandler(async (req: Request, res: Response) => {
        const comments = await this.service.getCommentById(req.params.articleId);
        res.json({
            success: true,
            data: comments
        });
    })
}

export default CommentController;
