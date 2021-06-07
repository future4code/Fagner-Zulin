import { User } from "../types/user";
import knexConnection from "./connection";

export const createUser = async (data: User): Promise<void> => {
  await knexConnection("User").insert(data);
};

export const selectUserBy = async (email: string): Promise<any> => {
  const [result] = await knexConnection("User").select().where({ email });
  return result;
};
