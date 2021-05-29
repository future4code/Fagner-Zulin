import { responsibleUserTask, task } from "../types/taskTypes";
import knexConnection from "./connection";

export const registerTask = async ({
  id,
  title,
  description,
  limitDate: limit_date,
  creatorUserId: creator_user_id,
}: task): Promise<void> => {
  await knexConnection("TodoListTask").insert({
    id,
    title,
    description,
    limit_date,
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

export const consultTaskByCreatorId = async (id: string): Promise<any> => {
  const result = await knexConnection("TodoListTask as tt")
    .join("TodoListUser as tu", "tt.creator_user_id", "tu.id")
    .select(
      "tt.id as taskId",
      "tt.title",
      "tt.description",
      "tt.limit_date as limitDate",
      "tt.status",
      "tu.nickname as creatorUserNickname"
    )
    .where("tt.creator_user_id", id);

  return result;
};

export const assignResponsible = async ({
  taskId: task_id,
  responsibleUserId: responsible_user_id,
}: responsibleUserTask): Promise<any> => {
  await knexConnection("TodoListResponsibleUserTaskRelation").insert({
    task_id,
    responsible_user_id,
  });
};

export const consultResponsibleTask = async (id: string): Promise<any> => {
  const result = await knexConnection(
    "TodoListResponsibleUserTaskRelation as tr"
  )
    .join("TodoListUser as tu", "tr.responsible_user_id", "tu.id")
    .select("tu.id", "tu.nickname")
    .where("tr.task_id", id);

  return result;
};

export const changeTaskStatus = async (
  id: string,
  status: string
): Promise<any> => {
  await knexConnection("TodoListTask")
    .update({ status: status })
    .where({ id: id });
};

export const consultTaskBy = async (status: string): Promise<any> => {
  const result = await knexConnection("TodoListTask as tt")
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
    .where("tt.status", status);
  return result;
};
