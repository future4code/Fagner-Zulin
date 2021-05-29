export interface taskRequest {
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
}

export interface task extends taskRequest {
  id: string;
}

export interface responsibleUserTask {
  taskId: string;
  responsibleUserId: string;
}
