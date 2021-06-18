export interface AuthenticationData {
  id: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface User extends UserData {
  id: string;
}

export interface UserInputDTO {
  name: any;
  email: any;
  password: any;
}
