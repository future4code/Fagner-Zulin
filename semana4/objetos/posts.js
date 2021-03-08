window.addEventListener("load", renderizaPost());
function renderizaPost() {
  const containerPosts = document.getElementById("container-de-posts");
  limpaPost(containerPosts);

  const colecaoDePosts = JSON.parse(localStorage.getItem("colecaoDePosts"));

  for (const post of colecaoDePosts.posts) {
    containerPosts.innerHTML += `
      <div class="post">
          <h1 class="titulo">${post.titulo}</h1>
          ${temImage(post)}
          <p class="conteudo">${post.conteudo}</p>
          <p class="autor">${post.autor}</p>
      </div>
      `;
  }
}

function limpaPost(container) {
  container.innerHTML = "";
}

function temImage(post) {
  return post.imagem !== "" ? `<img src="${post.imagem}">` : "";
}

function redirecionaPagina() {
  window.location.assign("./index.html");
}
