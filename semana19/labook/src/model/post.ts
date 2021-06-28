export enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT",
}

export interface Post {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt?: Date;
  authorId: string;
}

export interface PostData {
  photo: string;
  description: string;
  type: POST_TYPES;
}

export interface PostInputDTO {
  photo: any;
  description: any;
  type: any;
}

export interface PostComment {
  id: string;
  postId: string;
  creatorId: string;
  comment: string;
}
