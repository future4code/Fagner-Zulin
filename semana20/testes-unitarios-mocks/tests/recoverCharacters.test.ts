import { recoverCharacters } from "../src/recoverCharacters";
import { attacker, defender } from "./mock/characterMock";
import {
  validateCharacterFail,
  validateCharacterSucess,
} from "./mock/validateCharacterMock";

describe("Testing the recoverCharacters function", () => {
  test("Should throw a error when length characters array is less than 2", () => {
    expect.assertions(1);
    try {
      recoverCharacters([], validateCharacterSucess);
    } catch (error) {
      expect(error.message).toBe(
        "The character array must be at least two characters long."
      );
    }
  });

  test("Should return ao characters with life equal 1500 and length equal 2", () => {
    const result = recoverCharacters(
      [
        { ...defender, life: 100 },
        { ...attacker, life: 500 },
      ],
      validateCharacterSucess
    );

    expect(result[0].life).toBe(1500);
    expect(result[1].life).toBe(1500);
    expect(result).toHaveLength(2);
  });

  test("Should to have two calls and returns from validateCharacter and length characters equal 2", () => {
    const result = recoverCharacters(
      [
        { ...defender, life: 100 },
        { ...attacker, life: 500 },
      ],
      validateCharacterSucess
    );

    expect(result).toHaveLength(2);
    expect(validateCharacterSucess).toHaveBeenCalled();
    expect(validateCharacterSucess).toHaveReturnedTimes(2);
    expect(validateCharacterSucess).toHaveBeenCalledTimes(2);
  });

  test("Should throw a error and one calls and returns from validateCharacter", () => {
    try {
      const result = recoverCharacters(
        [
          { ...defender, life: -1, name: "" },
          { ...attacker, life: 500 },
        ],
        validateCharacterFail
      );
    } catch (error) {
      expect(error.message).toBe("Some Character is invalid");
      expect(validateCharacterFail).toHaveBeenCalled();
      expect(validateCharacterFail).toHaveReturnedTimes(1);
      expect(validateCharacterFail).toHaveBeenCalledTimes(1);
    }
  });

  beforeEach(() => {
    validateCharacterSucess.mockClear();
    validateCharacterFail.mockClear();
  });
});
