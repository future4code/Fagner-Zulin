export default function countDigits(n: number): number {
  if (n < 10) {
    return 1;
  }
  return 1 + countDigits(n / 10);
}
