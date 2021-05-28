import { user, userRequest } from "../types/userTypes";
import knexConnection from "./connection";

export const registerUser = async (userData: user): Promise<void> => {
  await knexConnection("TodoListUser").insert(userData);
};

export const consultUser = async (id: string): Promise<any> => {
  const [result] = await knexConnection("TodoListUser")
    .select("id", "nickname")
    .where("id", id);
  return result;
};

export const updateUser = async (
  id: string,
  data: userRequest
): Promise<any> => {
  await knexConnection("TodoListUser").update(data).where("id", id);
};
