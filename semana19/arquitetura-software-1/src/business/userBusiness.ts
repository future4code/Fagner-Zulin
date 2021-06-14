import { selectAllUsers } from "../data/userQueries";
import { User } from "../model/user";
import { tokenValidation } from "./validations/tokenValidations";

export const getAll = async (
  authorization: string | undefined
): Promise<User[]> => {
  tokenValidation(authorization);

  const users: User[] = await selectAllUsers();

  return users;
};
