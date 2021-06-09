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

export interface UserAddressRequest {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface UserAddress extends UserAddressRequest {
  numero: number;
  complemento?: string;
  cep: number;
}
