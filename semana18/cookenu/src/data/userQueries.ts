import { User } from "../types/user";
import knexConnection from "./connection";
import CustomError from "../errors/customError";

export const createUser = async (user: User) => {
  try {
    await knexConnection("cookenu_user").insert(user);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
