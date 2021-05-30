export function stringFormat(aDate: string): string {
  return aDate.split("/").reverse().join("-");
}

export function dateFormat(aDate: Date): string {
  const day = addZeroToLeft(aDate.getDate());
  const month = addZeroToLeft(aDate.getMonth() + 1);
  const year = aDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function addZeroToLeft(aValue: number): string {
  const numberWithZeroes =
    String(aValue).length === 1 ? `0${aValue}` : String(aValue);

  return numberWithZeroes;
}
