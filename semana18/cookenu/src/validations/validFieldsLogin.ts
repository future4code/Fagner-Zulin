import CustomError from "../errors/customError";

interface LoginData {
  email: string;
  password: string;
}

export const hasLoginFields = ({ email, password }: LoginData): LoginData => {
  if (!email || !password) {
    throw new CustomError("Some field is missing. Password, email is requied");
  }

  return { email, password };
};
