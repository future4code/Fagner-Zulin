import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { signupInputDTO, user } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import { inputValidation } from "./validations/signupValidations";

export const signupBusiness = async (
  userData: signupInputDTO
): Promise<string> => {
  const user = inputValidation(userData);

  const cypherPassword = await hash(user.password);

  const newUser: user = {
    ...user,
    password: cypherPassword,
    id: generateId(),
  };

  await insertUser(newUser);

  const token: string = generateToken({
    id: newUser.id,
    role: user.role,
  });

  return token;
};
