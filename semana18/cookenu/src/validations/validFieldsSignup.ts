import CustomError from "../errors/customError";

interface signupData {
  name: string;
  email: string;
  password: string;
}

const hasSignupFields = ({ name, email, password }: signupData): signupData => {
  if (!name || !password || !email) {
    throw new CustomError(
      "A field is missing. Name, password, email is requied"
    );
  }

  return { name, email, password };
};

const isValidEmail = (email: string): string => {
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

export const validSignupData = (data: signupData): signupData => {
  const fields = hasSignupFields(data);

  const email = isValidEmail(fields.email);
  const password = isValidPassword(fields.password);

  return { name: fields.name, email, password };
};
