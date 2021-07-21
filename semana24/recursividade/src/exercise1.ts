// Metodo recursivo que recebe um numero e imprime todos os numeros interios de zero até o numero passado de forma acendente
export function printNumbersAsc(number: number, value: number = 0): void {
  console.log(value);
  if (number === value) {
    return;
  }

  printNumbersAsc(number, value + 1);
}

export function printNumbersDesc(number: number) {
  console.log(number);
  if (number === 0) {
    return;
  }
  printNumbersDesc(number - 1);
}
