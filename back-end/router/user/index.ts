import { Router } from "express";
import { createUserController } from "../../controller";
export const userRouter = Router();
userRouter.post("/signup", createUserController);
