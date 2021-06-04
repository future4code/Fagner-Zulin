export type userRequest = {
  name?: string;
  nickname?: string;
  email?: string;
};

export interface userRequestRequired {
  name: string;
  nickname: string;
  email: string;
}

export interface user extends userRequestRequired {
  id: string;
}
