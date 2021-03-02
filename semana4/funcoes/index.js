//Exercícios de interpretação de código

//Exercício 1
/**
 * a. será impresso no console o resultado da multiplicação do valor
 * passado como paramentro por 5
 *
 * b. não iria aparecer nada no console
 */

//Exercício 2
/**
 * a. Será impresso no console somente os dois primeiros valores do
 * array, tendo em vista que a condição do for é que o index fosse menor que
 * 2
 *
 * b. Seria impresso os dois valores ("Amanda", "Caio") no console.
 */

//Exercício 3
/**
 * A função recebe um array de numeros, analisa cada valor do array, e
 * caso ele seja par, a função insere o esse valor multiplicado por
 * ele mesmo em um outro array que será retornado pela função
 *
 * Um melhor nome para função poderia ser numerosParesAoQuadrado
 */

//Exercícios de escrita de código

//Exercício 4
// a

function sobreMim() {
  console.log(
    "Eu sou Fagner, tenho 25 anos, moro em Londrina - PR e sou estudante."
  );
}
sobreMim();

//b
function sobre(nome, idade, cidade, estaEstudando) {
  let estudante = "";

  if (estaEstudando) {
    estudante = "sou estudante.";
  } else {
    estudante = "não sou estudante.";
  }

  let frase =
    "Eu sou " +
    nome +
    ", tenho " +
    idade +
    " anos, moro em " +
    cidade +
    " e " +
    estudante;

  console.log(frase);
}
sobre("Fagner", 25, "Londrina", false);

//Exercício 5
//a

function somaValores(valor1, valor2) {
  return valor1 + valor2;
}

const resultado = somaValores(2, 2);
console.log(resultado);

//b
function maiorOuIgual(valor1, valor2) {
  return valor1 >= valor2;
}
console.log(maiorOuIgual(2, 3));

//c
function repete(frase) {
  for (let index = 0; index < 10; index++) {
    console.log(frase);
  }
}

repete("Bora almoçar hahaha");

// Exercício 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//  a
const tamanho = (array) => {
  return array.length;
};
const retorno = tamanho(array);
console.log(retorno);

//b
const parOuNao = (numero) => {
  return numero % 2 === 0;
};
console.log(parOuNao(7));

//c
function quantosParesEm(array) {
  let acumulador = 0;

  for (const item of array) {
    if (numero % 2 === 0) {
      acumulador++;
    }
  }
  return acumulador;
}

let qtdPares = quantosParesEm(array);
console.log(qtdPares);

//d
function quantosParesEm(array) {
  let acumulador = 0;

  for (const item of array) {
    if (parOuNao(item)) {
      acumulador++;
    }
  }
  return acumulador;
}

qtdPares = quantosParesEm(array);
console.log(qtdPares);

//Desafios

//Exercício 1
//1
const imprime = (valor) => {
  console.log(valor);
};
imprime("Oi");
//2
const soma = (numero1, numero2) => {
  const result = numero1 + numero2;
  imprime(result);
};

// Exercício 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

//a
function parMultPorDois(array) {
  const arrayResult = [];

  for (const item of array) {
    if (item % 2 === 0) {
      arrayResult.push(item * 2);
    }
  }
  return arrayResult;
}

console.log(parMultPorDois(numeros));

//b
function maiorNumeroDe(array) {
  let maiorNumero = 0;

  for (const item of array) {
    if (item > maiorNumero) {
      maiorNumero = item;
    }
  }
  return maiorNumero;
}
console.log(maiorNumeroDe(numeros));

//c
function indexMaiorNumeroDe(array) {
  let indexMaiorNumero = 0;
  let maiorNumero = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
      indexMaiorNumero = index;
    }
  }

  return indexMaiorNumero;
}
console.log(indexMaiorNumeroDe(numeros));

//d
function inverte(array) {
  const arrayResult = [];

  for (let index = array.length - 1; index >= 0; index--) {
    arrayResult.push(array[index]);
  }
  return arrayResult;
}
console.log(inverte(numeros));
