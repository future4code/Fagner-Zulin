import { USER_ROLES } from "../types/user";
import CustomError from "../errors/customError";

export const validNormalAndCreator = (
  role: USER_ROLES,
  creatorId: string,
  id: string
): void => {
  if (role === "NORMAL" && creatorId !== id) {
    throw new CustomError("You are not allowed to finish this operation.", 401);
  }
};
