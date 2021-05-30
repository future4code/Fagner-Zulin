import {
  responsibleUserTask,
  task,
  taskStatusRequest,
} from "../types/taskTypes";
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
  responsibleUserIds,
}: responsibleUserTask): Promise<any> => {
  Promise.all(
    responsibleUserIds.map(async (id) => {
      return await knexConnection("TodoListResponsibleUserTaskRelation").insert(
        {
          task_id,
          responsible_user_id: id,
        }
      );
    })
  );
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

export const changeTaskStatus = async ({
  taskIds,
  status,
}: taskStatusRequest): Promise<any> => {
  Promise.all(
    taskIds.map(async (id) => {
      return await knexConnection("TodoListTask")
        .update({ status: status })
        .where({ id: id });
    })
  );
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

export const consultDelayedTask = async (): Promise<any> => {
  const [result] = await knexConnection.raw(`
    SELECT tt.id as taskId, tt.title, tt.description, 
    tt.limit_date as limitDate, tt.status, tu.id as creatorUserId,
    tu.nickname as creatorUserNickname
    FROM TodoListTask as tt
    INNER JOIN TodoListUser as tu 
    ON tt.creator_user_id = tu.id
    WHERE tt.limit_date < CURDATE()
  `);
  return result;
};

export const removeResponsible = async (
  taskId: string,
  responsibleUserId: string
): Promise<any> => {
  await knexConnection("TodoListResponsibleUserTaskRelation")
    .delete()
    .where("task_id", taskId)
    .andWhere("responsible_user_id", responsibleUserId);
};

export const responsibleTask = async (
  idTask: string,
  responsibleId: string
): Promise<any> => {
  const result = await knexConnection(
    "TodoListResponsibleUserTaskRelation as tr"
  )
    .where("tr.task_id", idTask)
    .andWhere("tr.responsible_user_id", responsibleId);

  return result;
};

export const queryTask = async (query: string): Promise<any> => {
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
    .where("tt.title", "like", `%${query}%`)
    .orWhere("tt.description", "like", `%${query}%`);
  return result;
};

export const deleteTaskBy = async (id: string): Promise<any> => {
  await knexConnection("TodoListResponsibleUserTaskRelation")
    .delete()
    .where("task_id", id);

  await knexConnection("TodoListTask").delete().where("id", id);
};
