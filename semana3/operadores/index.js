//Exercícios de interpretação de código

/**Exercício 1
 * a. false
 * b. false
 * c. true
 * e. boolean
 */

/**Exercício 2
 * a. undefined
 * b. null
 * c. 11
 * d. 3
 * e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 * f. 9
 */

//Exercícios de escrita de código
//Exercício 1
const idadeUsuario = Number(prompt("Qual sua idade?"));
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));

console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  idadeUsuario > idadeAmigo
);

console.log("Diferença de idade:", idadeUsuario - idadeAmigo);

// Exercício 2

const numeroPar = Number(prompt("Digite um número par: "));
console.log("Resto da divisão:", numeroPar % 2);
//Todo resto da divisão de numeros pares por 2 é igual a zero
//Todo resto da divisão de numeros impares por 2 é igual a 1

// Exercício 3
let listaDeTarefas = [];

listaDeTarefas.push(prompt("Informe uma tarefa a ser feita:"));
listaDeTarefas.push(prompt("Informe uma tarefa a ser feita:"));
listaDeTarefas.push(prompt("Informe uma tarefa a ser feita:"));

console.log(listaDeTarefas);

const indiceTarefa = Number(
  prompt("Digite o numero da tarefa já realizada (0, 1 ou 2):")
);
listaDeTarefas.splice(indiceTarefa, 1);
console.log(listaDeTarefas);

//Exercício 4
const nomeUsuario = prompt("Digite seu nome:");
const emailUsuario = prompt("Digite seu E-mail:");

console.log(
  "O e-mail " +
    emailUsuario +
    " foi cadastrado com sucesso. Seja bem-vinda(o), " +
    nomeUsuario +
    "!"
);

// DESAFIOS

//Exercício 1
//a
let temperaturaEmKelvin = ((77 - 32) * 5) / 9 + 273.15;
console.log("Temperatura de 77°F em kelvi", temperaturaEmKelvin + "K");

//b
let temperaturaEmFahrenheit = (80 * 9) / 5 + 32;
console.log(
  "Temperatura de 80°C em Fahrenheit",
  temperaturaEmFahrenheit + "°F"
);

//c
temperaturaEmFahrenheit = (30 * 9) / 5 + 32;
temperaturaEmKelvin = ((temperaturaEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(
  "Temperatura de 30°C em Fahrenheit e Kelvin",
  temperaturaEmFahrenheit + "°F,",
  temperaturaEmKelvin + "K"
);

//d
let tempUsuario = Number(
  prompt("Digite uma temperatura em  °C para converter:")
);
temperaturaEmFahrenheit = (tempUsuario * 9) / 5 + 32;
temperaturaEmKelvin = ((temperaturaEmFahrenheit - 32) * 5) / 9 + 273.15;

console.log(
  "Temperatura de 45" + tempUsuario + "°C em Fahrenheit e Kelvin",
  temperaturaEmFahrenheit + "°F,",
  temperaturaEmKelvin + "K"
);

//Exercício 2
//a
const quilowattsConsumido = Number(
  prompt("Informe a quantidade quilowatts consumido:")
);
const total = quilowattsConsumido * 0.05;
console.log("Total a ser pago: " + "R$ " + total);

//b
const valorDesconto =
  Number(prompt("Informe a porcentagem do desconto:")) / 100;
const totalDesconto = total - total * valorDesconto;
console.log("Total a ser pago com desconto: " + "R$ " + totalDesconto);

//Exercício 3
//a
const lbParaKg = 20 / 2.2046;
console.log("20lb equivalem a " + lbParaKg + " kg");

//b
const ozParaKg = 10.5 / 35.274;
console.log("10.5oz equivalem a " + ozParaKg + " kg");

//c
const miParaM = 100 / 0.00062137;
console.log("100mi equivalem a " + miParaM + " m");

//d
const ftParaM = 50 / 3.2808;
console.log("50ft equivalem a " + ftParaM + " m");

//e
const galParaL = 103.56 / 0.26417;
console.log("103.56gal equivalem a " + galParaL + " l");

//f
const xicParaL = (450 * 6) / 25;
console.log("450 xic equivalem a " + xicParaL + " l");

//g
const usuarioValor = Number(
  prompt("Digite o valor em xícaras que gostaria de converter:")
);
const UsuarioXicParaL = (usuarioValor * 6) / 25;
console.log(usuarioValor + " xic equivalem a " + UsuarioXicParaL + " l");
