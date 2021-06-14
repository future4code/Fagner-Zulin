import { LoginData, User } from "../model/user";
import { tokenGenerator } from "../services/tokeService";
import { compareHash } from "../services/hashService";
import { hasLoginFields } from "./validations/loginValidations";
import { selectUserByEmail } from "../data/userQueries";

export const loginBusiness = async (data: LoginData): Promise<string> => {
  const { email, password } = hasLoginFields(data);

  const user: User = await selectUserByEmail(email);

  if (!user) throw new Error("Unregistered user");

  const { id, password: hash, role } = user;

  if (!compareHash(password, hash)) {
    throw new Error("Incorrect password, try again");
  }

  return tokenGenerator({ id, role });
};
