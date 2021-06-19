import CustomError from "../errors/customError";
import { USER_ROLES } from "../types/user";

interface signupData {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

const hasSignupFields = ({
  name,
  email,
  password,
  role,
}: signupData): signupData => {
  if (!name || !password || !email || !role) {
    throw new CustomError(
      "Some field is missing. Name, password, email and role is requied"
    );
  }

  return { name, email, password, role };
};

export const isValidEmail = (email: string): string => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    throw new CustomError("The email is not valid");
  }

  return email;
};

const isValidPassword = (password: string): string => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  if (!passwordRegex.test(password)) {
    throw new CustomError(
      "The password must have at least six characters, at least one letter, one number and one special character"
    );
  }

  return password;
};

const isValidRole = (role: string): USER_ROLES => {
  if (!(role in USER_ROLES)) {
    throw new CustomError("'role' must be 'NORMAL' or 'ADMIN'");
  }

  return USER_ROLES[role as USER_ROLES];
};

export const validSignupData = (data: signupData): signupData => {
  const fields = hasSignupFields(data);

  const email = isValidEmail(fields.email);
  const password = isValidPassword(fields.password);
  const role = isValidRole(fields.role);

  return { name: fields.name, email, password, role };
};
