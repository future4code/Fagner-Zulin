import { TokenData } from "../types/token";
import * as jwt from "jsonwebtoken";

export const tokenGenerator = (data: TokenData): string => {
  const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "1min" });

  return token;
};
