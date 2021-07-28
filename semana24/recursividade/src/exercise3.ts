export default function sumWithOutRecursive(value: number) {
  let accumulate = 0;

  for (let i = 0; i <= value; i++) {
    accumulate += i;
  }

  return accumulate;
}
