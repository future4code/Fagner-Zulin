import { insertUser } from "../../data/userQueries";
import { generateToken } from "../../services/tokenService";
import { user, userData } from "../../model/user";
import { generateId } from "../../services/idService";
import { hash } from "../../services/hashService";

export const signupBusiness = async ({
  email,
  name,
  password,
}: userData): Promise<string> => {
  if (!name || !email || !password) {
    throw new Error('"name", "email" and "password" must be provided');
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  const user: user = {
    email,
    id,
    name,
    password: cypherPassword,
  };

  await insertUser(user);

  return generateToken({ id });
};
