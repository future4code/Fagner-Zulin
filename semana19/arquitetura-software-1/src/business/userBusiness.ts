import { dropUser, selectAllUsers } from "../data/userQueries";
import { User } from "../model/user";
import { tokenValidation } from "./validations/tokenValidations";

export const getAll = async (
  authorization: string | undefined
): Promise<User[]> => {
  tokenValidation(authorization);

  const users: User[] = await selectAllUsers();

  return users;
};

export const deleteUser = async (
  authorization: string | undefined,
  id: string
): Promise<void> => {
  const { role } = tokenValidation(authorization);

  if (role === "NORMAL") {
    throw new Error("Unauthorized. Only administrators can delete users!");
  }
  await dropUser(id);
};
