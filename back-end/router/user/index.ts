import { Router } from "express";
import { createUserController } from "../../controller";
import { loginUserController } from "../../controller";
import { tokenGenerate } from "../../utils";
export const userRouter = Router();
userRouter.post("/signup", createUserController);
userRouter.post("/login", loginUserController);
