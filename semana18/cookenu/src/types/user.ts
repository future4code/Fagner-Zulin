export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: USER_ROLES;
}

export interface UserFollow {
  follower_id: string;
  followed_id: string;
}
