export type authenticationData = {
  id: string;
};

export type userData = {
  name: string;
  email: string;
  password: string;
};

export type user = userData & { id: string };
