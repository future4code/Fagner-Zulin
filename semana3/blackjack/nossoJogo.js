const cartaUsuario = [];
let placarUsuario = 0;

const cartaComputador = [];
let placarComputador = 0;

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  for (let index = 0; index < 2; index++) {
    const carta = comprarCarta();
    cartaUsuario.push(carta.texto);
    placarUsuario += carta.valor;
  }

  for (let index = 0; index < 2; index++) {
    const carta = comprarCarta();
    cartaComputador.push(carta.texto);
    placarComputador += carta.valor;
  }

  console.log(
    "Usuário - cartas: " +
      cartaUsuario[0] +
      " " +
      cartaUsuario[1] +
      " - pontuação " +
      placarUsuario
  );

  console.log(
    "Computador - cartas: " +
      cartaComputador[0] +
      " " +
      cartaComputador[1] +
      " - pontuação " +
      placarComputador
  );

  if (placarComputador === placarUsuario) {
    console.log("Empate!");
  } else if (placarUsuario > placarComputador) {
    console.log("O usuário ganhou!");
  } else {
    console.log("O computador ganhou!");
  }
} else {
  console.log("O jogo acabou");
}
