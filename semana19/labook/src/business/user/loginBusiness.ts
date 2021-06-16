import { UserDB } from "../../data/userQueries";
import { user } from "../../model/user";
import { HashService } from "../../services/hashService";
import { TokenService } from "../../services/tokenService";

export const loginBusiness = async (
  email: string,
  password: string
): Promise<string> => {
  if (!email || !password) {
    throw new Error('"email" and "password" must be provided');
  }

  const userDB = new UserDB();

  const queryResult = await userDB.selectUserByEmail(email);

  if (!queryResult) {
    throw new Error("Invalid credentials");
  }

  const user: user = {
    id: queryResult.id,
    name: queryResult.name,
    email: queryResult.email,
    password: queryResult.password,
  };

  const hashService = new HashService();

  const passwordIsCorrect: boolean = hashService.compare(
    password,
    user.password
  );

  if (!passwordIsCorrect) {
    throw new Error("Invalid credentials");
  }

  const tokenService = new TokenService();
  const token: string = tokenService.generateToken({
    id: user.id,
  });

  return token;
};
