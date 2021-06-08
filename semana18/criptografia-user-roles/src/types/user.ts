export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
