import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export const generateHash = (password: string): string => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = genSaltSync(rounds);
  const hash = hashSync(password, salt);

  return hash;
};

export const compareHash = (password: string, hash: string): boolean => {
  return compareSync(password, hash);
};
