import { userRequest, userRequestRequired } from "../types/userTypes";
import {
  responsibleUserTask,
  taskRequest,
  taskStatusRequest,
} from "../types/taskTypes";

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
  responsibleUserIds,
}: responsibleUserTask) => {
  if (!taskId || !responsibleUserIds) {
    throw new Error(
      "Some field is missing. The taskId and responsibleUserId fields must be informed."
    );
  }

  return { taskId, responsibleUserIds };
};

export const validUpdateStatusField = ({
  status,
  taskIds,
}: taskStatusRequest): taskStatusRequest => {
  if (!status || !taskIds)
    throw new Error("The status and taskIds fields must be informed.");
  return { status, taskIds };
};
