import { validSignupData } from "../validations/validFieldsSignup";
import { User } from "../types/user";
import { idGenerator } from "../services/idService";
import { generateHash, compareHash } from "../services/hashService";
import {
  insertNewUser,
  selectUserByEmail,
  updatePassword,
} from "../data/userQueries";
import { tokenGenerator } from "../services/tokenService";
import { Request, Response } from "express";
import { hasLoginFields } from "../validations/validFieldsLogin";
import CustomError from "../errors/customError";
import { validResetData } from "../validations/validFieldResetPassword";
import { generatePassword } from "../services/passwordService";
import transport from "../services/emailService";

export default class AuthenticationUserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, name, password, role } = validSignupData(req.body);

      const user: User = {
        id: idGenerator(),
        email,
        name,
        password: generateHash(password),
        role,
      };

      await insertNewUser(user);

      const token = tokenGenerator({ id: user.id, role: user.role });

      res.status(201).json({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = hasLoginFields(req.body);

      const user = await selectUserByEmail(email);

      if (!user) throw new CustomError("Unregistered user");

      const { id, password: hash, role }: User = user;

      if (!compareHash(password, hash)) {
        throw new CustomError("Incorrect password, try again", 401);
      }

      const token = tokenGenerator({ id, role });

      res.status(200).send({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };
  resetPassword = async (req: Request, res: Response) => {
    try {
      const email = await validResetData(req.body);
      const password = generatePassword();
      const hash = generateHash(password);
      await updatePassword(email, hash);

      transport.sendMail({
        from: "contact@cookenu.com",
        to: [email],
        subject: "Reset Password",
        text: `This is your new password: ${password}`,
      });

      res.send({ message: "Your new password will be sent to your email" });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
