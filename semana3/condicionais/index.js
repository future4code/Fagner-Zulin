//Exercícios de interpretação de código

//Exercício 1
/**
 * o codigo valida se o numero fornecido pelo usuário é impar ou par
 *
 * Usa o resto da divisão por 2 para avaliar em qual dos grupos o numero se
 * encaixa
 *
 * Ele impreme "passou no teste" quando o numero é par, e "não passou no teste"
 * quando o numero é impar
 */

// Exercício 2
/**
 * a. o codigo serve para selecionar o valor da fruta requisitada pelo usuário
 *
 * b. a msg será "O preço da fruta maçã é R$ 2.25"
 *
 * c. a mensagem seria "O preço da fruta pêra é R$ 5. "
 */

// Exercício 3
/**
 * a. a primeira linha  recebe um valor pelo usuario convertendo ele para Number
 *
 * b. no caso de digitar 10 apareceria a msg "Esse número passou no teste",
 * agora, no caso de digitar -10 não apareceria msg alguma.
 *
 * c. haverá erro no ultimo console, pois ele tenta acessar uma variavel
 * que está em outro escopo (escopo do if), e não é possivel acessar variaveis
 * que não estejam no mesmo escopo ou no escopo superior.
 */

//Exercícios de escrita de código

// //Exercício 4
// const idadeUsuario = Number(prompt("Digite sua idade: "));

// if (idadeUsuario >= 18) {
//   console.log("Você pode dirigir");
// } else {
//   console.log("Você não pode dirigir.");
// }

// //Exercício 5
// const turnoAluno = prompt(
//   "Digite o turno em que você estuda (M (matutino), V (Vespertino) ou N (Noturno)):"
// );

// if (turnoAluno === "M") {
//   console.log("Bom dia");
// } else if (turnoAluno === "V") {
//   console.log("Boa tarde");
// } else if (turnoAluno === "N") {
//   console.log("Boa noite");
// } else {
//   console.log("Digite um periodo válido.");
// }

// //Exercício 6
// const turnoAluno = prompt(
//   "Digite o turno em que você estuda (M (matutino), V (Vespertino) ou N (Noturno)):"
// );

// switch (turnoAluno) {
//   case "M":
//     console.log("Bom dia");
//     break;
//   case "V":
//     console.log("Boa Tarde");
//     break;
//   case "N":
//     console.log("Boa Noite");
//     break;
//   default:
//     console.log("Digite um periodo válido.");
//     break;
// }

// //Exercício 7
// const generoFilme = prompt("Digite o gênero do filme:");
// const precoIngresso = Number(prompt("Digite o preço do ingresso"));

// if (generoFilme === "fantasia" && precoIngresso < 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// }

// //Desafio

// //Desafio 1
// const generoFilme = prompt("Digite o gênero do filme:");
// const precoIngresso = Number(prompt("Digite o preço do ingresso"));

// if (generoFilme === "fantasia" && precoIngresso < 15) {
//   const snack = prompt(
//     "Qual snack (pipoca, chocolate, doces, etc) você irá comprar? "
//   );
//   console.log("Bom filme!");
//   console.log("... com " + snack);
// } else {
//   console.log("Escolha outro filme :(");
// }

//Desafio 2
const nomeCompleto = prompt("Informe seu nome Completo:");
const tipoJogo = prompt(
  "Informe o tipo de jogo (IN indica internacional e DO indica doméstico):"
);
const etapaDoJogo = prompt(
  "Informe a Etapa do jogo (SF indica semi-final;" +
    " DT indica decisão de terceiro lugar; e FI indica final):"
);

const categoria = Number(prompt("Informe a categoria (1, 2, 3 ou 4): "));
const qtdIngressos = Number(prompt("Informe a quantidade de ingressos: "));

let valorParcial = 0;
switch (etapaDoJogo) {
  case "SF":
    if (categoria === 1) {
      valorParcial = 1320;
    } else if (categoria === 2) {
      valorParcial = 880;
    } else if (categoria === 3) {
      valorParcial = 550;
    } else if (categoria === 4) {
      valorParcial += 220;
    }
    break;

  case "DT":
    if (categoria === 1) {
      valorParcial = 660;
    } else if (categoria === 2) {
      valorParcial = 440;
    } else if (categoria === 3) {
      valorParcial = 330;
    } else if (categoria === 4) {
      valorParcial = 170;
    }
    break;

  case "FI":
    if (categoria === 1) {
      valorParcial = 1980;
    } else if (categoria === 2) {
      valorParcial = 1320;
    } else if (categoria === 3) {
      valorParcial = 800;
    } else if (categoria === 4) {
      valorParcial = 330;
    }
    break;

  default:
    console.log("Algo deu errado, tente novamente");
    break;
}

let valorTotal = 0;
if (tipoJogo === "DO") {
  valorTotal = valorParcial * qtdIngressos;

  console.log("---DADOS DA COMPRA---");
  console.log("Nome do cliente: " + nomeCompleto);
  console.log("Tipo do jogo: Nacional");

  if (etapaDoJogo === "SF") {
    console.log("Etapa do jogo: Semifinais");
  } else if (etapaDoJogo === "DT") {
    console.log("Etapa do jogo: Decisão do 3º lugar");
  } else if (etapaDoJogo === "DT") {
    console.log("Etapa do jogo: Final");
  }

  console.log("Categoria: " + categoria);
  console.log("Quantidade de Ingressos: " + qtdIngressos);
  console.log("---Valores--- ");
  console.log("Valor do ingresso:  R$ " + valorParcial);
  console.log("Valor total:  R$ " + valorTotal);
} else if (tipoJogo === "IN") {
  valorTotal = (valorParcial * qtdIngressos) / 4.1;

  console.log("---DADOS DA COMPRA---");
  console.log("Nome do cliente: " + nomeCompleto);
  console.log("Tipo do jogo: Internacional");

  if (etapaDoJogo === "SF") {
    console.log("Etapa do jogo: Semifinais");
  } else if (etapaDoJogo === "DT") {
    console.log("Etapa do jogo: Decisão do 3º lugar");
  } else if (etapaDoJogo === "DT") {
    console.log("Etapa do jogo: Final");
  }

  console.log("Categoria: " + categoria);
  console.log("Quantidade de Ingressos: " + qtdIngressos);
  console.log("---Valores--- ");
  console.log("Valor do ingresso:  U$ " + valorParcial / 4.1);
  console.log("Valor total:  U$ " + valorTotal);
}
