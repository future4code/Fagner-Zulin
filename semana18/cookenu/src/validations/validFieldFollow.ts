import { selectUserById } from "../data/userQueries";
import CustomError from "../errors/customError";

interface FollowData {
  userToFollowId: string;
}

const hasFollowField = ({ userToFollowId }: FollowData): string => {
  if (!userToFollowId) {
    throw new CustomError("The userToFollowId field is required");
  }

  return userToFollowId;
};

export const validFollowField = async (data: FollowData): Promise<string> => {
  const followed = hasFollowField(data);

  const result = await selectUserById(followed);

  if (!result) throw new CustomError("User not found", 404);

  return followed;
};
