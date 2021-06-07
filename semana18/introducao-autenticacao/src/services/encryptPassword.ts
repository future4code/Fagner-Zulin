import bcrypt from "bcryptjs";

export const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};
