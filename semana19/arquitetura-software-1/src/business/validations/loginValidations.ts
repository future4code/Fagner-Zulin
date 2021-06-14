import { LoginData } from "../../model/user";

export const hasLoginFields = ({ email, password }: LoginData): LoginData => {
  if (!email || !password) {
    throw new Error("Some field is missing. Password, email is requied");
  }

  return { email, password };
};
