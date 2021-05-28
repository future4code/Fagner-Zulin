export function isOlderThanEighteen(birthDate: string): boolean {
  const birthDateSplitted = birthDate.split("/");
  const birthYear = Number(birthDateSplitted[2]);
  const date = new Date();
  const currentYear = date.getFullYear();

  return currentYear - birthYear >= 18;
}
