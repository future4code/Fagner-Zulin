import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/casino";

describe("Testing verifyAge", () => {
  const casinoBR: Casino = {
    location: LOCATION.BRAZIL,
    name: "Grave Party Beach",
  };

  const casinoUS: Casino = {
    location: LOCATION.EUA,
    name: "Miami Beach",
  };
  test("A Brazilian user who can enter the Brazilian casino", () => {
    const users: User[] = [
      { name: "Andre Mexer", age: 21, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoBR, users);

    expect(result.brazilians.allowed).toContain("Andre Mexer");
  });

  test("A American user who can enter the Brazilian casino", () => {
    const users: User[] = [
      { name: "Tony Stark", age: 40, nacionality: NACIONALITY.AMERICAN },
    ];

    const result = verifyAge(casinoBR, users);

    expect(result.americans.allowed).toContain("Tony Stark");
  });

  test("Two Americans users and two Brazilians users (all under age) who can't enter the American casino", () => {
    const users: User[] = [
      { name: "Agatha Harkness", age: 19, nacionality: NACIONALITY.AMERICAN },
      { name: "America Chavez", age: 19, nacionality: NACIONALITY.AMERICAN },
      { name: "Roberto da Costa", age: 19, nacionality: NACIONALITY.BRAZILIAN },
      { name: "Nina", age: 19, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoUS, users);

    expect(result.americans.unallowed).toEqual([
      "Agatha Harkness",
      "America Chavez",
    ]);
    expect(result.brazilians.unallowed).toEqual(["Roberto da Costa", "Nina"]);
  });

  test("Two Americans users (of legal age) and two Brazilians users (under age)  enter the American casino", () => {
    const users: User[] = [
      { name: "Tony Stark", age: 21, nacionality: NACIONALITY.AMERICAN },
      { name: "Carol Danvers", age: 21, nacionality: NACIONALITY.AMERICAN },
      { name: "Roberto da Costa", age: 19, nacionality: NACIONALITY.BRAZILIAN },
      { name: "Nina", age: 19, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoUS, users);

    expect(result.americans.allowed).toEqual(["Tony Stark", "Carol Danvers"]);
    expect(result.brazilians.unallowed).toEqual(["Roberto da Costa", "Nina"]);
  });

  test("'brazilians.allowed' array length less than 2 and greater than 0", () => {
    const users: User[] = [
      { name: "Nina", age: 19, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoBR, users);

    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("'americans.unallowed' array length equal 0", () => {
    const users: User[] = [
      { name: "Tony Stark", age: 40, nacionality: NACIONALITY.AMERICAN },
    ];

    const result = verifyAge(casinoBR, users);

    expect(result.americans.unallowed.length).toBe(0);
  });

  test("'americans.unallowed' and 'americans.unallowed' has some user", () => {
    const users: User[] = [
      { name: "Agatha Harkness", age: 19, nacionality: NACIONALITY.AMERICAN },
      { name: "America Chavez", age: 19, nacionality: NACIONALITY.AMERICAN },
      { name: "Roberto da Costa", age: 19, nacionality: NACIONALITY.BRAZILIAN },
      { name: "Nina", age: 19, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoUS, users);

    expect(result.americans.unallowed).toContain("America Chavez");
    expect(result.brazilians.unallowed).toContain("Nina");
  });

  test("'brazilian.unallowed.length' greater than 1; 'american.unallowed.length' less than 1; 'american.allowed.length' equal 2 ", () => {
    const users: User[] = [
      { name: "Agatha Harkness", age: 21, nacionality: NACIONALITY.AMERICAN },
      { name: "America Chavez", age: 21, nacionality: NACIONALITY.AMERICAN },
      { name: "Roberto da Costa", age: 19, nacionality: NACIONALITY.BRAZILIAN },
      { name: "Nina", age: 19, nacionality: NACIONALITY.BRAZILIAN },
    ];

    const result = verifyAge(casinoUS, users);

    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.allowed.length).toEqual(2);
  });
});
