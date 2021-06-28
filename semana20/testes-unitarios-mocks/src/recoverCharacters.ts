import { Character } from "./character";

export function recoverCharacters(
  characters: Character[],
  validator: (input: Character) => boolean
): Character[] {
  if (characters.length < 2) {
    throw new Error(
      "The character array must be at least two characters long."
    );
  }

  for (const character of characters) {
    if (!validator(character)) {
      throw new Error("Some Character is invalid");
    }
  }

  return characters.map((character) => {
    return { ...character, life: 1500 };
  });
}
