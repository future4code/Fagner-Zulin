//a
// function fatorial(value: number): number {
//   if (value === 1) {
//     return 1;
//   }
//   return fatorial(value - 1) * value;
// }

// console.log(fatorial(3));

//b)
function fatorial(value: number): number {
  if (value === 0) {
    return 1;
  }
  return fatorial(value - 1) * value;
}

console.log(fatorial(0));
