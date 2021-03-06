import knexConnection from "./connection";
import { User } from "../model/user";

export const insertUser = async (user: User): Promise<void> => {
  try {
    await knexConnection("User_Arq").insert(user);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const [result] = await knexConnection("User_Arq").select().where({ email });

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const selectAllUsers = async (): Promise<any> => {
  try {
    const result = await knexConnection("User_Arq");

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const dropUser = async (id: string): Promise<void> => {
  try {
    await knexConnection("User_Arq").delete().where({ id });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
