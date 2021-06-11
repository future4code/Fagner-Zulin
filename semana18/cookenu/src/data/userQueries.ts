import { User, UserFollow } from "../types/user";
import knexConnection from "./connection";
import CustomError from "../errors/customError";

export const insertNewUser = async (user: User): Promise<void> => {
  try {
    await knexConnection("cookenu_user").insert(user);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const [result] = await knexConnection("cookenu_user")
      .select()
      .where({ email });

    return result;
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const selectUserById = async (id: string): Promise<any> => {
  try {
    const [result] = await knexConnection("cookenu_user")
      .select()
      .where({ id });

    return result;
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const insertFollow = async (data: UserFollow): Promise<void> => {
  try {
    await knexConnection("cookenu_followers").insert(data);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const deleteFollow = async ({
  followed_id,
  follower_id,
}: UserFollow): Promise<void> => {
  try {
    await knexConnection("cookenu_followers")
      .delete()
      .where({ follower_id })
      .andWhere({ followed_id });
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
