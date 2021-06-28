import { validateCharacter } from "../src/character";
import { character } from "./mock/characterMock";

describe("Testing the validateCharacter function", () => {
  test("Should return false for a character name empty", () => {
    const result = validateCharacter({ ...character, name: "" });
    expect(result).toBe(false);
  });

  test("Should return false for a character life equal zero", () => {
    const result = validateCharacter({ ...character, life: 0 });
    expect(result).toBe(false);
  });

  test("Should return false for a character power equal zero", () => {
    const result = validateCharacter({ ...character, power: 0 });
    expect(result).toBe(false);
  });

  test("Should return false for a character defense equal zero", () => {
    const result = validateCharacter({ ...character, defense: 0 });
    expect(result).toBe(false);
  });

  test("Should return false for a character life less than zero", () => {
    const result = validateCharacter({ ...character, life: -2 });
    expect(result).toBe(false);
  });

  test("Should return true for a valid character", () => {
    const result = validateCharacter(character);
    expect(result).toBe(true);
  });
});
