import { task } from "../types/taskTypes";
import knexConnection from "./connection";

export const registerTask = async ({
  id,
  title,
  description,
  limitDate: limit_Date,
  creatorUserId: creator_user_id,
}: task): Promise<void> => {
  await knexConnection("TodoListTask").insert({
    id,
    title,
    description,
    limit_Date,
    creator_user_id,
  });
};

export const consultTask = async (id: string): Promise<any> => {
  const [result] = await knexConnection("TodoListTask as tt")
    .join("TodoListUser as tu", "tt.creator_user_id", "tu.id")
    .select(
      "tt.id as taskId",
      "tt.title",
      "tt.description",
      "tt.limit_date as limitDate",
      "tt.status",
      "tu.id as creatorUserId",
      "tu.nickname as creatorUserNickname"
    )
    .where("tt.id", id);
  return result;
};
