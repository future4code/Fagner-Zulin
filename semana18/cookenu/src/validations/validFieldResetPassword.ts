import CustomError from "../errors/customError";
import { isValidEmail } from "./validFieldsSignup";
import { selectUserByEmail } from "../data/userQueries";

interface ResetData {
  email: string;
}

const hasResetPasswordField = ({ email }: ResetData): ResetData => {
  if (!email) {
    throw new CustomError(
      "Some field is missing. Name, password, email and role is requied"
    );
  }

  return { email };
};

export const validResetData = async (data: ResetData): Promise<string> => {
  const field = hasResetPasswordField(data);

  const email = isValidEmail(field.email);

  const result = await selectUserByEmail(email);

  if (!result) throw new CustomError("Unregistered email", 404);

  return email;
};
