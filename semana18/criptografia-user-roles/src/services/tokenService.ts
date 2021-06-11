import { TokenData } from "../types/token";
import * as jwt from "jsonwebtoken";

export const tokenGenerator = (data: TokenData): string => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY is missing");

  const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "1min" });

  return token;
};

export const tokenValidator = (token: string): TokenData => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY is missing");

  const data: TokenData = jwt.verify(token, process.env.JWT_KEY) as any;

  return data;
};
