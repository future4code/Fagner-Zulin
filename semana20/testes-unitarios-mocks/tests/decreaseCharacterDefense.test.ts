import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense";
import { defender } from "./mock/characterMock";
import {
  validateCharacterFail,
  validateCharacterSucess,
} from "./mock/validateCharacterMock";

describe("Testing the decreaseCharacterDefense function", () => {
  test("Should change character defense and call/return validateCharacter once", () => {
    decreaseCharacterDefense(defender, 500, validateCharacterSucess);

    expect(defender.defense).toBe(500);
    expect(validateCharacterSucess).toHaveBeenCalled();
    expect(validateCharacterSucess).toHaveBeenCalledTimes(1);
    expect(validateCharacterSucess).toHaveReturnedTimes(1);
  });

  test("Should throw error when the character is invalid and call/return validateCharacter once", () => {
    expect.assertions(4);

    try {
      decreaseCharacterDefense(
        { ...defender, name: "" },
        500,
        validateCharacterFail
      );
    } catch (error) {
      expect(error.message).toBe("Invalid Character");
      expect(validateCharacterFail).toHaveBeenCalled();
      expect(validateCharacterFail).toHaveBeenCalledTimes(1);
      expect(validateCharacterFail).toHaveReturnedTimes(1);
    }
  });

  test("Should throw error when defense is less than new defense", () => {
    expect.assertions(1);
    try {
      decreaseCharacterDefense(defender, 2000, validateCharacterSucess);
    } catch (error) {
      expect(error.message).toEqual(
        "The new defense is bigger than the current"
      );
    }
  });

  beforeEach(() => {
    defender.defense = 1000;
    validateCharacterSucess.mockClear();
    validateCharacterFail.mockClear();
  });
});
