//a)
/**
 * a entrada é um array de numeros e a saida
 * é um objeto
 */

//b)
/**
 * as outras variaveis são: numerosOrdenados, soma, estatisticas
 */

type estatisticas = {
  maior: number;
  menor: number;
  media: number;
};

//c)
type amostra = {
  numeros: number[];
  obterEstatistica: (numeros: number[]) => estatisticas;
};

function obterEstatisticas(numeros: number[]): estatisticas {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
