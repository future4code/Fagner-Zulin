export type taskData = {
  title: string;
  description: string;
  deadline: string;
  authorId: string;
};

export type taskOutputDTO = {
  id: any;
  title: any;
  description: any;
  deadline: any;
  status: any;
  author_id: any;
  nickname: any;
};

export type task = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  authorId: string;
  authorNickname: string;
};

export const parseToTask = (data: taskOutputDTO): task => {
  return {
    authorId: data.author_id,
    authorNickname: data.nickname,
    deadline: data.deadline,
    description: data.description,
    id: data.id,
    status: data.status,
    title: data.title,
  };
};
