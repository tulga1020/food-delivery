import { Request } from "express";
import {UserModel} from "./../../db"
import { passwordHash } from "../../utils";
export const createUserQuert = async (req: Request) => {
    try{
        const {name, email, password, phone} = req.body
        const hash = await passwordHash(password)
        const user = await UserModel.create({
            name, email, password:hash,  phone
        })
        return user
    }
};
