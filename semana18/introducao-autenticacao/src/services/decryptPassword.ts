import bcrypt from "bcryptjs";

export const decryptPassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};
