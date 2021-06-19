import { SignupData, User, LoginData } from "../model/user";
import { validSignup } from "./validations/signupValidations";
import { idGenerator } from "../services/idService";
import { generateHash, compareHash } from "../services/hashService";
import { tokenGenerator } from "../services/tokeService";
import { insertUser, selectUserByEmail } from "../data/userQueries";
import { hasLoginFields } from "./validations/loginValidations";

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
