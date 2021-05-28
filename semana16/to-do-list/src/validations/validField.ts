import { userRequest, userRequestRequired } from "../types/userTypes";
import { taskRequest } from "../types/taskTypes";

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
