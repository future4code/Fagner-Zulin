export function stringFormat(aDate: string): string {
  return aDate.split("/").reverse().join("-");
}

export function dateFormat(aDate: Date): string {
  const day = addZeroToLeft(aDate.getDate(), 2);
  const month = addZeroToLeft(aDate.getMonth() + 1, 2);
  const year = aDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function addZeroToLeft(aValue: number, lenght: number): string {
  let numberWithZeroes = String(aValue);
  let counter = numberWithZeroes.length;

  while (counter < lenght) {
    numberWithZeroes = "0" + numberWithZeroes;
    counter++;
  }

  return numberWithZeroes;
}
