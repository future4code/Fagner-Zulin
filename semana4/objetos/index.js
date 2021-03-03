const colecaoDePosts = [];

function capturaInputs() {
  const inputTitulo = document.getElementById("titulo-post");
  const inputAutor = document.getElementById("autor-post");
  const inputConteudo = document.getElementById("conteudo-post");

  if (validaCampos(inputTitulo.value, inputAutor.value, inputConteudo.value)) {
  }
}

function fabricaDePosts(titulo, autor, conteudo) {
  return {
    titulo,
    autor,
    conteudo,
  };
}

function LimpaCampos(arrayDeCampos) {
  for (const campo of arrayDeCampos) {
    campo.value = "";
  }
}

function validaCampos(valorTitulo, valorAutor, valorConteudo) {
  return valorTitulo !== "" && valorAutor !== "" && valorConteudo !== "";
}
