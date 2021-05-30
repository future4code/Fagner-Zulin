import { consultTask, responsibleTask } from "../data/taskQuerys";

export const hasTask = async (taskId: string): Promise<void> => {
  const hasTask = await consultTask(taskId);
  if (!hasTask) throw new Error(`Task (id: ${taskId}) not found`);
};

export const isResponsible = async (
  taskId: string,
  responsibleUserId: string
): Promise<void> => {
  const isResponsible = await responsibleTask(taskId, responsibleUserId);
  if (!isResponsible) {
    throw new Error("This user is not responsible for this task");
  }
};

export const hasTasks = async (taskIds: string[]): Promise<any> => {
  return Promise.all(
    taskIds.map(async (id) => {
      return await hasTask(id);
    })
  );
};
