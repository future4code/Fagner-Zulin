export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export interface User extends UserData {
  id: string;
}
