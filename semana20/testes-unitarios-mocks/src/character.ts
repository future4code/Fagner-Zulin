export interface Character {
  name: string;
  life: number;
  power: number;
  defense: number;
}

export function validateCharacter({
  defense,
  life,
  name,
  power,
}: Character): boolean {
  if (!defense || !life || !name || !power) {
    return false;
  } else if (defense <= 0 || life <= 0 || power <= 0) {
    return false;
  }
  return true;
}
