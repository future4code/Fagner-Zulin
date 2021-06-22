import { performAttackID } from "../src/performAttack";
import { attacker, defender } from "./mock/characterMock";
import {
  validateCharacterFail,
  validateCharacterSucess,
} from "./mock/validateCharacterMock";

describe("Testing the performAttack function", () => {
  test("Should to have two calls and returns from validateCharacter", () => {
    performAttackID(attacker, defender, validateCharacterSucess);

    expect(defender.life).toBe(1300);
    expect(validateCharacterSucess).toHaveBeenCalled();
    expect(validateCharacterSucess).toHaveBeenCalledTimes(2);
    expect(validateCharacterSucess).toHaveReturnedTimes(2);
  });

  test("Should throw a error and two calls and returns from validateCharacter", () => {
    expect.assertions(4);
    try {
      performAttackID(attacker, defender, validateCharacterFail);
    } catch (error) {
      expect(error.message).toBe("Invalid Character");
      expect(validateCharacterSucess).toHaveBeenCalled();
      expect(validateCharacterSucess).toHaveBeenCalledTimes(2);
      expect(validateCharacterSucess).toHaveReturnedTimes(2);
    }
  });

  test("Should not change the defender life", () => {
    performAttackID(
      attacker,
      { ...defender, defense: 3000 },
      validateCharacterSucess
    );

    expect(defender.life).toBe(1500);
  });

  beforeEach(() => {
    defender.life = 1500;
  });
});
