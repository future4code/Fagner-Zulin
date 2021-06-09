import { USER_ROLES } from "./user";

export interface TokenData {
  id: string;
  role: USER_ROLES;
}
