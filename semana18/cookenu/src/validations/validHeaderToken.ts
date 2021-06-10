import { IncomingHttpHeaders } from "http2";
import CustomError from "../errors/customError";

export const hasHeaderToken = ({
  authorization,
}: IncomingHttpHeaders): string => {
  if (!authorization) {
    throw new CustomError("Not authenticated! Login Token is required", 401);
  }

  return authorization;
};
