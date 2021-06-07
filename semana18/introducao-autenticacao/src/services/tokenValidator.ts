import { TokenData } from "../types/token";
import * as jwt from "jsonwebtoken";

export const tokenValidator = (token: string): string => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY is missing");

  const { id } = jwt.verify(token, process.env.JWT_KEY) as any;

  return id;
};
