let cartaUsuario = [];
let placarUsuario = 0;

let cartaComputador = [];
let placarComputador = 0;

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  let flagAsesIguais = true;
  while (flagAsesIguais) {
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
    if (
      (cartaUsuario[0].includes("A") && cartaUsuario[1].includes("A")) ||
      (cartaComputador[0].includes("A") && cartaComputador[1].includes("A"))
    ) {
      cartaComputador = [];
      cartaUsuario = [];
      placarComputador = 0;
      placarUsuario = 0;
    } else {
      flagAsesIguais = false;
    }
  }

  let flagCompraMaisCarta = true;
  while (flagCompraMaisCarta) {
    const comprarMaiscarta = confirm(
      "Suas cartas são " +
        cartaUsuario.join(" ") +
        ". A carta revelada do computador é " +
        cartaComputador[0] +
        "\n" +
        "Deseja comprar mais uma carta?"
    );

    if (placarUsuario >= 21) {
      flagCompraMaisCarta = false;
    } else if (comprarMaiscarta) {
      const carta = comprarCarta();
      cartaUsuario.push(carta.texto);
      placarUsuario += carta.valor;
    } else {
      flagCompraMaisCarta = comprarMaiscarta;

      if (placarUsuario <= 21) {
        while (placarComputador <= placarUsuario) {
          const carta = comprarCarta();
          cartaComputador.push(carta.texto);
          placarComputador += carta.valor;
        }
      }
    }
  }

  let resultado;

  if (placarComputador === placarUsuario) {
    resultado = "Empate!";
  } else if (placarComputador > 21 && placarUsuario < 21) {
    resultado = "O usuário ganhou!";
  } else if (placarUsuario > 21) {
    resultado = "O computador ganhou!";
  }

  alert(
    "Suas cartas são " +
      cartaUsuario.join(" ") +
      ". Sua pontuação é " +
      placarUsuario +
      ".\n" +
      "As cartas do computador são " +
      cartaComputador.join(" ") +
      ". A pontuação do computador é " +
      placarComputador +
      ".\n" +
      resultado
  );
} else {
  console.log("O jogo acabou");
}
