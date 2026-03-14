import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service.js";
import asyncHandler from "../middleware/asyncHandler.js";

class UserController {
    service = new UserService();
    
    createUser = asyncHandler(async (req: Request, res: Response) => {
        const user = await this.service.createUser(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    });

    getUsers = asyncHandler(async (req: Request, res: Response) => {
        const users = await this.service.getUsers();
        res.json({
            success: true,
            data: users
        });
    })
}

export default UserController;