export type client = {
  cpf: number;
  name: string;
  birthDate: string;
  balance: number;
  transactions: transaction[];
};

export type transaction = {
  value: number;
  date: number;
  description: string;
};

export const Clients: client[] = [];
