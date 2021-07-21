// função recursiva que calcule a soma dos números inteiros de 0 a n
export default function sum(n: number): number {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
}
