import { Character } from "./character";

export function decreaseCharacterDefense(
  character: Character,
  newDefense: number,
  validator: (input: Character) => boolean
) {
  const characterValid = validator(character);

  if (!characterValid) {
    throw new Error("Invalid Character");
  }

  if (character.defense < newDefense) {
    throw new Error("The new defense is bigger than the current");
  }

  character.defense -= newDefense;
}
