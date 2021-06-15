import { user } from "../model/user";
import knexConnection from "./connection";

export const insertUser = async (user: user): Promise<void> => {
  try {
    await knexConnection("labook_users").insert(user);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
