import { User, UserFollow } from "../types/user";
import knexConnection from "./connection";
import CustomError from "../errors/customError";
import { deleteRecipeByCreator } from "./recipeQueries";

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

export const getFeed = async (id: string): Promise<any> => {
  try {
    const [result] = await knexConnection.raw(`
    SELECT cr.id, title, description, creation_date, creator_id, cu.name
    FROM cookenu_recipes as cr
    JOIN cookenu_followers as cf
    ON cf.followed_id = creator_id AND cf.follower_id = "${id}"
    JOIN cookenu_user as cu
    ON cu.id = cr.creator_id
    ORDER BY creation_date desc;
    `);

    return result;
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

const deleteFollows = async (id: string): Promise<any> => {
  try {
    await knexConnection("cookenu_followers")
      .delete()
      .where({ follower_id: id })
      .orWhere({ followed_id: id });
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const dropUser = async (id: string): Promise<any> => {
  try {
    await deleteFollows(id);
    await deleteRecipeByCreator(id);

    await knexConnection("cookenu_user").delete().where({ id });
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const updatePassword = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await knexConnection("cookenu_user").update({ password }).where({ email });
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
