import { Character } from "./character";

export function increaseCharacterStrength(
  character: Character,
  newStrength: number,
  validator: (input: Character) => boolean
) {
  const characterValid = validator(character);

  if (!characterValid) {
    throw new Error("Invalid Character");
  }

  if (character.power > newStrength) {
    throw new Error("New strength is less than current");
  }

  character.power += newStrength;
}
