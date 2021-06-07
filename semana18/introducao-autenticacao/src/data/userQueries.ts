import { User } from "../types/user";
import knexConnection from "./connection";

export const createUser = async (data: User): Promise<void> => {
  await knexConnection("User").insert(data);
};
