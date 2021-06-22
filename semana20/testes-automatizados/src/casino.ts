export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export function verifyAge(casino: Casino, users: User[]): Result {
  if (casino.location === LOCATION.BRAZIL) {
    return {
      brazilians: {
        allowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.BRAZILIAN && user.age >= 18
          )
          .map((user) => user.name),
        unallowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.BRAZILIAN && user.age < 18
          )
          .map((user) => user.name),
      },
      americans: {
        allowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.AMERICAN && user.age >= 18
          )
          .map((user) => user.name),
        unallowed: users
          .filter(
            (user) => user.nacionality === NACIONALITY.AMERICAN && user.age < 18
          )
          .map((user) => user.name),
      },
    };
  } else {
    return {
      brazilians: {
        allowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.BRAZILIAN && user.age >= 21
          )
          .map((user) => user.name),
        unallowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.BRAZILIAN && user.age < 21
          )
          .map((user) => user.name),
      },
      americans: {
        allowed: users
          .filter(
            (user) =>
              user.nacionality === NACIONALITY.AMERICAN && user.age >= 21
          )
          .map((user) => user.name),
        unallowed: users
          .filter(
            (user) => user.nacionality === NACIONALITY.AMERICAN && user.age < 21
          )
          .map((user) => user.name),
      },
    };
  }
}
