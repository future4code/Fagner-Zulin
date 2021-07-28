export default function printArray(array: any[]): void {
  if (array.length > 0) {
    console.log(array[0]);
    printArray(array.slice(1));
  }
}
