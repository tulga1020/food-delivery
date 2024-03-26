import { Response, Request } from "express";
import { LoginQuery } from "../../queries";
export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result = await LoginQuery(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
