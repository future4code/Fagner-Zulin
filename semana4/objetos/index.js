const colecaoDePosts = [];

function criaPosts() {
  const { inputTitulo, inputAutor, inputConteudo } = capturaInputs();

  const valorTitulo = inputTitulo.value;
  const valorAutor = inputAutor.value;
  const valorConteudo = inputConteudo.value;

  if (validaCampos(valorTitulo, valorAutor, valorConteudo)) {
    colecaoDePosts.push(fabricaDePosts(valorTitulo, valorAutor, valorConteudo));

    LimpaCampos([inputTitulo, inputAutor, inputConteudo]);

    rederizaPost();
  } else {
    alert("Por Favor, preencha todos os campos.");
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

function capturaInputs() {
  const inputTitulo = document.getElementById("titulo-post");
  const inputAutor = document.getElementById("autor-post");
  const inputConteudo = document.getElementById("conteudo-post");

  return {
    inputTitulo,
    inputAutor,
    inputConteudo,
  };
}

function rederizaPost() {
  const containerPosts = document.getElementById("container-de-posts");
  limpaPost(containerPosts);
  for (const post of colecaoDePosts) {
    containerPosts.innerHTML += `
    <div class="post">
        <h1 class="titulo">${post.titulo}</h1>
        <p class="conteudo">${post.conteudo}</p>
        <p class="autor">${post.autor}</p>
    </div>
    `;
  }
}

function limpaPost(container) {
  container.innerHTML = "";
}
