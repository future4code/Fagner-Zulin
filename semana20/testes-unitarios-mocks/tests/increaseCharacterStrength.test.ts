import { increaseCharacterStrength } from "../src/increaseCharacterStrength";
import { attacker } from "./mock/characterMock";
import {
  validateCharacterFail,
  validateCharacterSucess,
} from "./mock/validateCharacterMock";

describe("Testing the increaseCharacterStrength function", () => {
  test("Should change character power and call/return validateCharacter once", () => {
    increaseCharacterStrength(attacker, 2700, validateCharacterSucess);

    expect(attacker.power).toBe(3000);
    expect(validateCharacterSucess).toHaveBeenCalled();
    expect(validateCharacterSucess).toHaveBeenCalledTimes(1);
    expect(validateCharacterSucess).toHaveReturnedTimes(1);
  });

  test("Should throw error when the character is invalid and call/return validateCharacter once", () => {
    expect.assertions(4);

    try {
      increaseCharacterStrength(
        { ...attacker, name: "" },
        2700,
        validateCharacterFail
      );
    } catch (error) {
      expect(error.message).toBe("Invalid Character");
      expect(validateCharacterFail).toHaveBeenCalled();
      expect(validateCharacterFail).toHaveBeenCalledTimes(1);
      expect(validateCharacterFail).toHaveReturnedTimes(1);
    }
  });

  test("Should throw error when power is greater than new power", () => {
    expect.assertions(1);
    try {
      increaseCharacterStrength(attacker, 100, validateCharacterSucess);
    } catch (error) {
      expect(error.message).toEqual("New strength is less than current");
    }
  });

  beforeEach(() => {
    attacker.power = 300;
    validateCharacterSucess.mockClear();
    validateCharacterFail.mockClear();
  });
});
