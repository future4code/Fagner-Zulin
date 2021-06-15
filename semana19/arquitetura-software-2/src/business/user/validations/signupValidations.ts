import { signupInputDTO, userData, USER_ROLES } from "../../../model/user";
export const inputValidation = (input: signupInputDTO): userData => {
  if (
    !input.name ||
    !input.nickname ||
    !input.email ||
    !input.password ||
    !input.role
  ) {
    throw new Error(
      'Preencha os campos "name","nickname", "email" e "password"'
    );
  }

  if (typeof input.name !== "string") {
    throw new Error("name precisa ser uma string");
  }

  if (typeof input.nickname !== "string") {
    throw new Error("nickname precisa ser uma string");
  }

  if (typeof input.email !== "string") {
    throw new Error("email precisa ser uma string");
  }

  if (typeof input.password !== "string") {
    throw new Error("password precisa ser uma string");
  }

  if (!(input.role in USER_ROLES)) {
    throw new Error("role precisa ter o valor de 'ADMIN' ou 'NORMAL'");
  }

  return {
    email: input.email,
    name: input.name,
    nickname: input.nickname,
    password: input.password,
    role: USER_ROLES[input.role as USER_ROLES],
  };
};
