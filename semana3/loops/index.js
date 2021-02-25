//Exercícios de interpretação de código

//Exercício 1
/**
 * O código está iterando a variavel valor
 * O valor do console log é 4
 */

//Exercício 2
/**
 * a. será impresso nuemros que forem maiores que 18 (19, 21, 23, 25, 27, 30)
 * b. sim, é possivel acessar os conteudos de cada indice com o for of,
 * isso se faz atraves da variavel declarada dentro da sitaxe do for of,
 * (let numero)
 */

//Desafio 1
/**
 * O resultado impresso seria:
 *
 * 0
 * 00
 * 000
 * 0000
 */

//Exercícios de escrita de código

//Exercício 3:
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
//a
for (const item of array) {
  console.log(item);
}

console.log("---");
//b
for (const item of array) {
  console.log(item / 10);
}

console.log("---");
//c
const arrayPar = [];
for (const item of array) {
  if (item % 2 === 0) {
    arrayPar.push(item);
  }
}
console.log(arrayPar);

console.log("---");
//d
const arrayFrase = [];
for (let index = 0; index < array.length; index++) {
  arrayFrase.push("O elemento do índex " + index + " é " + array[index]);
}
console.log(arrayFrase);

console.log("---");
//e
let valorMaximo = 0;
let valorMinimo = 1000;
for (const item of array) {
  if (item > valorMaximo) {
    valorMaximo = item;
  }
  if (item < valorMinimo) {
    valorMinimo = item;
  }
}
console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo);
