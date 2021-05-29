import { userRequest, userRequestRequired } from "../types/userTypes";
import { responsibleUserTask, taskRequest } from "../types/taskTypes";

export const validCreateUserFields = ({
  name,
  nickname,
  email,
}: userRequestRequired): userRequestRequired => {
  if (!name || !nickname || !email) {
    throw new Error(
      "Some field is missing. The name, nick name and email fields must be informed."
    );
  }
  return { name, nickname, email };
};

export const validEditUserFields = (data: userRequest): userRequest => {
  for (const [key, value] of Object.entries(data)) {
    if (!value?.length) {
      throw new Error(`The ${key} field cannot be empty`);
    }
  }
  return data;
};

export const validCreateTaskFields = ({
  title,
  description,
  limitDate,
  creatorUserId,
}: taskRequest): taskRequest => {
  if (!title || !description || !limitDate || !creatorUserId) {
    throw new Error(
      "Some field is missing. The title, description, limitDate and creatorUserId fields must be informed."
    );
  }

  return { title, description, limitDate, creatorUserId };
};

export const validPostResponsibleFields = ({
  taskId,
  responsibleUserId,
}: responsibleUserTask) => {
  if (!taskId || !responsibleUserId) {
    throw new Error(
      "Some field is missing. The taskId and responsibleUserId fields must be informed."
    );
  }

  return { taskId, responsibleUserId };
};

export const validUpdateStatusField = (status: string): string => {
  if (!status) throw new Error("The status field must be informed.");
  return status;
};
