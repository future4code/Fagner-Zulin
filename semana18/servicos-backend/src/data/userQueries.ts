import { User, UserAddress } from "../types/user";
import knexConnection from "./connection";

export const createUser = async (
  data: User,
  address: UserAddress
): Promise<void> => {
  await knexConnection("User").insert(data);
  await knexConnection("UserAddress").insert(address);
};

export const selectUserByEmail = async (email: string): Promise<any> => {
  const [result] = await knexConnection("User").select().where({ email });
  return result;
};

export const selectUserById = async (id: string): Promise<any> => {
  const [result] = await knexConnection("User").select().where({ id });
  return result;
};

export const deleteUser = async (id: string): Promise<void> => {
  await knexConnection("User").delete().where({ id });
};
