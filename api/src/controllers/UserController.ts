import { Request, Response } from "express";
import { userRepository } from "../models/UserModel.js";
import { ApiRes } from "../utilities/ApiResponse.js";

export const createUser = async (req: Request, res: Response) => {
  const user = await userRepository.createAndSave({
    username: "test",
    password: "test",
    email: "test@asdasd.com",
  });
  res.status(200).json(ApiRes(null, user)).end();
};
