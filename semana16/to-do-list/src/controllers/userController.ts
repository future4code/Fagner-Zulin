import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { user } from "../types/userTypes";
import {
  validCreateUserFields,
  validEditUserFields,
} from "../validations/validField";
import {
  consultAllUser,
  consultUser,
  registerUser,
  updateUser,
  searchUserBy,
  deleteUserBy,
} from "../data/userQuerys";
import { validQueryString } from "../validations/validQuerys";

export default class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email } = validCreateUserFields(req.body);

      const userData: user = {
        name,
        nickname,
        email,
        id: uuidv4(),
      };

      await registerUser(userData);

      res.send({ message: "Created user!", data: userData });
    } catch (error) {
      if (error.sqlMessage?.includes("nickname")) {
        res.status(400).send({ message: "The nickname is already in use." });
      }

      if (error.sqlMessage?.includes("email")) {
        res.status(400).send({ message: "The email is already in use." });
      }

      res.status(400).send({ message: error.message });
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      const result = await consultUser(id);

      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  editUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      const data = validEditUserFields(req.body);

      await updateUser(id, data);

      res.send({ message: "Updated user!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getAllUser = async (_: Request, res: Response) => {
    try {
      const result = await consultAllUser();

      res.send({ users: result });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  searchUser = async (req: Request, res: Response) => {
    try {
      const query = validQueryString(req.query.query, "query");

      const result = await searchUserBy(query);

      res.send({ users: result });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      await deleteUserBy(id);
      res.send({ message: "Deleted user" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
