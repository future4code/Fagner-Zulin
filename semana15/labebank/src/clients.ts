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

export const Clients: client[] = [
  {
    cpf: 10025647686,
    name: "Fagner Zulin",
    birthDate: "27/02/1996",
    balance: 0,
    transactions: [
      {
        date: 1621555200000,
        description: "Depósito",
        value: +1000,
      },
    ],
  },
  {
    cpf: 10125647681,
    name: "Lara Zulin",
    birthDate: "30/03/2001",
    balance: 0,
    transactions: [
      {
        date: 1621555200000,
        description: "Depósito",
        value: +1000,
      },
    ],
  },
];
