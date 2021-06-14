import knexConnection from "./connection";
import { User } from "../model/user";

export const insertUser = async (user: User): Promise<void> => {
  try {
    await knexConnection("User_Arq").insert(user);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
