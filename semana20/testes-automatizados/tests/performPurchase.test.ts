import { performPurchase, User } from "../src";

describe("Testing performPurchase function", () => {
  test("User balance greater than purchase amount", () => {
    const user: User = {
      name: "Steve Rogers",
      balance: 100,
    };

    const result = performPurchase(user, 20);

    expect(result).toEqual({ ...user, balance: 80 });
  });

  test("User balance equal purchase amount", () => {
    const user: User = {
      name: "Steve Rogers",
      balance: 20,
    };

    const result = performPurchase(user, 20);

    expect(result).toEqual({ ...user, balance: 0 });
  });

  test("User balance greater than purchase amount", () => {
    const user: User = {
      name: "Steve Rogers",
      balance: 10,
    };

    const result = performPurchase(user, 20);

    expect(result).toBeUndefined();
  });
});
