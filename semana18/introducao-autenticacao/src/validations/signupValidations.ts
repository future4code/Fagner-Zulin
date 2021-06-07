interface RequestBody {
  email: string;
  password: string;
}

const hasFields = ({ email, password }: RequestBody): RequestBody => {
  if (!email || !password) {
    throw new Error("Some field is missing! Email and password are required");
  }

  return { email, password };
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

export const validSignupFields = (body: RequestBody): RequestBody => {
  const fields = hasFields(body);

  const email = isValidEmail(fields.email);
  const password = isValidPassword(fields.password);

  return { email, password };
};
