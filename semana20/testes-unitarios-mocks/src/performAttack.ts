import { Character, validateCharacter } from "./character";

export function performAttack(attacker: Character, defender: Character) {
  const validAttacker = validateCharacter(attacker);
  const validDefender = validateCharacter(defender);

  if (!validAttacker || !validDefender) {
    throw new Error("Invalid Character");
  }

  if (attacker.power > defender.defense) {
    defender.life -= attacker.power - defender.defense;
  }
}

export function performAttackID(
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) {
  const validAttacker = validator(attacker);
  const validDefender = validator(defender);

  if (!validAttacker || !validDefender) {
    throw new Error("Invalid Character");
  }

  if (attacker.power > defender.defense) {
    defender.life -= attacker.power - defender.defense;
  }
}
