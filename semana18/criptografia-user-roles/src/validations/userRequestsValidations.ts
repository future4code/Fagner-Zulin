import { USER_ROLES } from "../types/user";

interface RequestBody {
  email: string;
  password: string;
}

interface RequestBodySignup extends RequestBody {
  role: USER_ROLES;
}

const hasFields = ({
  email,
  password,
  role,
}: RequestBodySignup): RequestBodySignup => {
  if (!email || !password || !role) {
    throw new Error(
      "Some field is missing! Role, Email and password are required"
    );
  }

  return { email, password, role };
};

const hasFieldsLogin = ({ email, password }: RequestBody): RequestBody => {
  if (!email || !password) {
    throw new Error("Some field is missing! Email and password are required");
  }

  return { email, password };
};

const isValidRole = (role: string): USER_ROLES => {
  if (!(role in USER_ROLES)) {
    throw new Error("'role' must be 'NORMAL' or 'ADMIN'");
  }

  return USER_ROLES[role as USER_ROLES];
};

const isValidEmail = (email: string): string => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    throw new Error("The email is not valid");
  }

  return email;
};

const isValidPassword = (password: string): string => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  if (!passwordRegex.test(password)) {
    throw new Error(
      "The password must have at least six characters, at least one letter, one number and one special character"
    );
  }

  return password;
};

export const validSignupFields = (
  body: RequestBodySignup
): RequestBodySignup => {
  const fields = hasFields(body);

  const email = isValidEmail(fields.email);
  const password = isValidPassword(fields.password);
  const role = isValidRole(fields.role);

  return { email, password, role };
};

export const validLoginFields = (body: RequestBody): RequestBody => {
  const { email, password } = hasFieldsLogin(body);

  const emailValidated = isValidEmail(email);

  return { email: emailValidated, password };
};

export const validHeaderToken = (authorization: string | undefined): string => {
  if (!authorization) throw new Error("The headers authorization is missing");

  return authorization;
};
