import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupInputDTO } from "../../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const data: signupInputDTO = req.body;

    const token: string = await signupBusiness(data);

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
