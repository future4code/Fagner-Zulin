import { User } from "../types/user";
import knexConnection from "./connection";
import CustomError from "../errors/customError";

export const createUser = async (user: User): Promise<void> => {
  try {
    await knexConnection("cookenu_user").insert(user);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const [result] = await knexConnection("cookenu_user")
      .select()
      .where({ email });

    return result;
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
