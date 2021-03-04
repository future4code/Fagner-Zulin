let arrDespesas = [];
imprimirDespesas(arrDespesas);
imprimirExtrato();

// PRIMEIRO
function imprimirDespesas(despesas) {
  let divDespesas = document.getElementById("despesas");
  divDespesas.innerHTML = "<p><u>Despesas Detalhadas</u></p>";

  despesas.forEach((despesa) => {
    divDespesas.innerHTML += `<p>Valor: R$ ${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}</p>`;
  });
}

// SEGUNDO
function imprimirExtrato() {
  let divExtrato = document.getElementById("extrato");
  let gastoTotal = 0;
  let gastoAlimentacao = 0;
  let gastoUtilidades = 0;
  let gastoViagem = 0;

  arrDespesas.forEach((despesa) => {
    switch (despesa.tipo) {
      case "alimentação":
        gastoAlimentacao += despesa.valor;
        break;
      case "utilidades":
        gastoUtilidades += despesa.valor;
        break;
      case "viagem":
        gastoViagem += despesa.valor;
        break;
    }
  });

  if (arrDespesas.length !== 0) {
    gastoTotal = arrDespesas
      .map((despesa) => {
        return despesa.valor;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
  }

  divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`;
}

function limparFiltros() {
  document.getElementById("tipoFiltro").value = "";
  document.getElementById("valorFiltroMin").value = "";
  document.getElementById("valorFiltroMax").value = "";
}

function adicionarDespesa() {
  let valorCdt = document.getElementById("valorCadastro");
  let tipoCtd = document.getElementById("tipoCadastro");
  let descricaoCtd = document.getElementById("descricaoCadastro");

  if (
    validarValor(valorCdt) &&
    validarTipo(tipoCtd) &&
    validarDescricao(descricaoCtd)
  ) {
    let novaDespesa = {
      valor: Number(valorCdt.value),
      tipo: tipoCtd.value,
      descricao: descricaoCtd.value,
    };

    arrDespesas.push(novaDespesa);

    valorCdt.value = "";
    tipoCtd.value = "";
    descricaoCtd.value = "";

    limparFiltros();
    imprimirDespesas(arrDespesas);
    imprimirExtrato();
  } else {
    alert("`Faltou algum valor ou algum valor é um número negativo`");
  }
}

// TERCEIRO
function filtrarDespesas() {
  const tipoFiltro = document.getElementById("tipoFiltro");
  const valorFiltroMin = document.getElementById("valorFiltroMin");
  const valorFiltroMax = document.getElementById("valorFiltroMax");

  let valorTipoFiltro = tipoFiltro.value;
  let valorMin = Number(valorFiltroMin.value);
  let valorMax = Number(valorFiltroMax.value);

  if (
    validarTipo(tipoFiltro) &&
    validarValor(valorFiltroMin) &&
    validarValor(valorFiltroMax) &&
    !(valorMin > valorMax)
  ) {
    let despesasFiltradas = arrDespesas.filter((despesa) => {
      return (
        (despesa.tipo === valorTipoFiltro || valorTipoFiltro === "todos") &&
        despesa.valor >= valorMin &&
        despesa.valor <= valorMax
      );
    });

    imprimirDespesas(despesasFiltradas);
  } else {
    alert("Preencha os campos com valores válidos");
  }
}

function ordenaValores() {
  const valoresOrdenados = arrDespesas.sort((despesaA, despesaB) => {
    return despesaB.valor - despesaA.valor;
  });
  imprimirDespesas(valoresOrdenados);
}

// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
  if (valor.value.length > 0 && parseInt(valor.value) > 0) {
    return true;
  }
  return false;
}

function validarTipo(tipo) {
  if (tipo.value !== "") {
    return true;
  }
  return false;
}

function validarDescricao(texto) {
  if (texto.value.replace(/ /g, "").length !== 0) {
    return true;
  }
  return false;
}
