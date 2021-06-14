import { TokenData } from "../../model/token";
import { tokenValidator } from "../../services/tokeService";

const hasHeaderToken = (authorization: string | undefined): string => {
  if (!authorization) {
    throw new Error("Not authenticated! Login Token is required");
  }

  return authorization;
};

export const tokenValidation = (
  authorization: string | undefined
): TokenData => {
  const token = hasHeaderToken(authorization);
  return tokenValidator(token);
};
