const colecaoDePosts = [];

function criaPosts() {
  const {
    inputTitulo,
    inputAutor,
    inputConteudo,
    inputImagem,
  } = capturaInputs();

  const valorTitulo = inputTitulo.value;
  const valorAutor = inputAutor.value;
  const valorConteudo = inputConteudo.value;
  const valorImagem = inputImagem.value;

  if (validaCampos(valorTitulo, valorAutor, valorConteudo)) {
    colecaoDePosts.push(
      fabricaDePosts(valorTitulo, valorAutor, valorConteudo, valorImagem)
    );

    localStorage.setItem(
      "colecaoDePosts",
      JSON.stringify({ posts: colecaoDePosts })
    );

    LimpaCampos([inputTitulo, inputAutor, inputConteudo, inputImagem]);

    window.location.assign("./posts.html");
  } else {
    alert("Por Favor, preencha todos os campos.");
  }
}

function fabricaDePosts(titulo, autor, conteudo, imagem = "") {
  return {
    titulo,
    autor,
    conteudo,
    imagem,
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

function capturaInputs() {
  const inputTitulo = document.getElementById("titulo-post");
  const inputAutor = document.getElementById("autor-post");
  const inputConteudo = document.getElementById("conteudo-post");
  const inputImagem = document.getElementById("imagem-post");

  return {
    inputTitulo,
    inputAutor,
    inputConteudo,
    inputImagem,
  };
}
