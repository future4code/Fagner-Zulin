let contadorID = 0;

function criarTarefa() {
  const tarefa = document.getElementById("tarefa");
  const valorTarefa = tarefa.value;

  if (valorTarefa !== "" && testeSemEspaços(valorTarefa)) {
    addTarefa(valorTarefa);
  } else {
    alert(
      "O campo foi preenchido incorretamente, por favor coloque o valor válido!"
    );
  }

  limpa(tarefa);

  function addTarefa(valorTarefa) {
    const diaDaSemana = document.getElementById("dias-semana").value;
    const horaDoDia = document.getElementById(`horas-dia`).value;

    const horarioDaTarefa = document.querySelector(
      `div#${diaDaSemana}>div#${horaDoDia}`
    );

    horarioDaTarefa.innerHTML += `<p id="tarefa${contadorID}" onclick="riscaTarefa('tarefa${contadorID}')"> 🔸 ${valorTarefa} <p/>`;
    contadorID++;
  }

  function limpa(campo) {
    campo.value = "";
  }

  function testeSemEspaços(valorCampo) {
    const regex = /\S+/g;
    return regex.test(valorCampo);
  }
}

function riscaTarefa(id) {
  const tarefa = document.getElementById(id);
  tarefa.style.textDecorationLine = "line-through";
}

function limpaPlanner() {
  const diasDaSemana = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];

  for (const dia of diasDaSemana) {
    for (let hora = 0; hora < 24; hora++) {
      document.querySelector(`div#${dia}>div#hora${hora}`).innerHTML = "";
    }
  }
}
