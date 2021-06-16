import { UserDB } from "../../data/userQueries";
import { TokenService } from "../../services/tokenService";
import { user, userData } from "../../model/user";
import { generateId } from "../../services/idService";
import { HashService } from "../../services/hashService";

export const signupBusiness = async ({
  email,
  name,
  password,
}: userData): Promise<string> => {
  if (!name || !email || !password) {
    throw new Error('"name", "email" and "password" must be provided');
  }

  const id: string = generateId();

  const hashService = new HashService();

  const cypherPassword = hashService.hash(password);

  const user: user = {
    email,
    id,
    name,
    password: cypherPassword,
  };

  const userDB = new UserDB();
  await userDB.insertUser(user);

  const tokenService = new TokenService();

  return tokenService.generateToken({ id });
};
