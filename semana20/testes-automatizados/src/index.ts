export interface User {
  name: string;
  balance: number;
}

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    const newUser: User = {
      ...user,
      balance: user.balance - value,
    };

    return newUser;
  }
  return undefined;
}
