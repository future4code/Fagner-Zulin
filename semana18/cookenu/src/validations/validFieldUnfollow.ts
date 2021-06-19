import { selectUserById } from "../data/userQueries";
import CustomError from "../errors/customError";

interface UnfollowData {
  userToUnfollowId: string;
}

const hasUnfollowField = ({ userToUnfollowId }: UnfollowData): string => {
  if (!userToUnfollowId) {
    throw new CustomError("The userToUnfollowId field is required");
  }

  return userToUnfollowId;
};

export const validUnfollowField = async (
  data: UnfollowData
): Promise<string> => {
  const unfollowed = hasUnfollowField(data);

  const result = await selectUserById(unfollowed);

  if (!result) throw new CustomError("User not found", 404);

  return unfollowed;
};
