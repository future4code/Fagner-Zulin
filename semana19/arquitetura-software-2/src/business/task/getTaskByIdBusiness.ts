import { selectTaskById } from "../../data/task/selectTaskById";
import { task } from "../../model/task";

export const getTaskByIdBusiness = async (id: string): Promise<task> => {
  const result: task = await selectTaskById(id);

  return result;
};
