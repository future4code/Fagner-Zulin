//Exercícios de interpretação de código
/** Exercício 1
 * console.log(b) => 10
 * console.log(a, b) => 10 5
 */

/** Exercício 2
 * console.log(a, b, c) => 10 10 10
 */

//Exercícios de escrita de código
// Exercício 1

let name;
let idade;

console.log("Tipo de nome", typeof nome); //undefined
console.log("Tipo de idade", typeof idade); //undefined

nome = prompt("Digite seu nome:");
idade = prompt("Digite seu nome:");

console.log("Tipo de nome", typeof nome); //string
console.log("Tipo de idade", typeof idade); //string

console.log("Olá", nome, "você tem", idade, "anos");

// Execício 2
const endereco = prompt("Qual é o seu endereço? ");
console.log("1. Qual é o seu endereço? ");
console.log("Resposta:", endereco);

const corFavorita = prompt("Qual é a sua cor favorita? ");
console.log("2. Qual é a sua cor favorita? ");
console.log("Resposta:", corFavorita);

const musicaPreferida = prompt("Qual é a sua música preferida? ");
console.log("3. Qual é a sua música preferida? ");
console.log("Resposta:", musicaPreferida);

const nomeMelhorAmigo = prompt("Qual o nome do seu melhor amigo? ");
console.log("4. Qual o nome do seu melhor amigo? ");
console.log("Resposta:", nomeMelhorAmigo);

const cidadeParaVisitar = prompt(
  "Qual o nome de uma cidade que queira visitar? "
);
console.log("5. Qual o nome de uma cidade que queira visitar? ");
console.log("Resposta:", cidadeParaVisitar);

// Exercício 3
const comidasPreferidas = [
  "comida japonesa",
  "lasanha",
  "pizza",
  "bolo de cenoura",
  "chocolate",
];

console.log(comidasPreferidas);

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

comidasPreferidas[1] = prompt("Qual sua comida favorita?");
console.log(comidasPreferidas);

//Exercício 4
const perguntas = [
  "Está calor hoje?",
  "Vai trabalhar hoje?",
  "Hoje é feriado?",
];
const respostas = [true, true, false];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);
