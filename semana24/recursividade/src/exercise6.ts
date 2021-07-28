export default function bigger(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] > bigger(array.slice(1))) {
    return array[0];
  } else {
    return bigger(array.slice(1));
  }
}
