import { connection } from "../connection";
import { parseToTask, task } from "../../model/task";

export const selectTaskById = async (id: string): Promise<task> => {
  const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `);

  if (!result[0][0]) {
    throw new Error("Tarefa não encontrada");
  }

  return parseToTask(result[0][0]);
};
