import { Request, Response } from "express";
import { createUserQuery } from "../../queries";
export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.send({ message: "Successfully requested", user });
  } catch (error: any) {
    res.send(error.message);
  }
};
