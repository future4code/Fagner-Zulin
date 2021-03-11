import React from "react";
import FormNovoPost from "./components/FormNovoPost/FormNovoPost";
import Post from "./components/Post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    idPosts: 4,
    posts: [
      {
        id: 1,
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
      {
        id: 2,
        nomeUsuario: "joaozinho",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2",
      },
      {
        id: 3,
        nomeUsuario: "andrezinho",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=3",
      },
    ],
  };

  adicionaNovoPost = (post) => {
    const { nomeUsuario, fotoUsuario, fotoPost } = post;

    const novoPost = {
      id: this.state.idPosts,
      nomeUsuario,
      fotoUsuario,
      fotoPost,
    };

    this.setState({
      idPosts: this.state.idPosts + 1,
      posts: [...this.state.posts, novoPost],
    });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormNovoPost aoAdicionarNovoPost={this.adicionaNovoPost} />
        {listaDePosts}
      </AppContainer>
    );
  }
}

export default App;
