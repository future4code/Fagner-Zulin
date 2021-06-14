import { SignupData, User } from "../model/user";
import { validSignup } from "./validations/signupValidations";
import { idGenerator } from "../services/idService";
import { generateHash } from "../services/hashService";
import { tokenGenerator } from "../services/tokeService";
import { insertUser } from "../data/userQueries";

export const signupBusiness = async (data: SignupData): Promise<string> => {
  const { name, email, password, role } = validSignup(data);

  const user: User = {
    id: idGenerator(),
    name,
    email,
    password: generateHash(password),
    role,
  };

  await insertUser(user);

  return tokenGenerator({ id: user.id, role: user.role });
};
