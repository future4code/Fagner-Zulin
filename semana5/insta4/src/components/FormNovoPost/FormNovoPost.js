import React, { Component } from "react";
import { FormContainer, InputTexto } from "./styled";

export default class FormNovoPost extends Component {
  state = {
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
  };

  handleNomeUsuario = (event) => {
    this.setState({
      inputNomeUsuario: event.target.value,
    });
  };

  handleFotoUsuario = (event) => {
    this.setState({
      inputFotoUsuario: event.target.value,
    });
  };

  handleFotoPost = (event) => {
    this.setState({
      inputFotoPost: event.target.value,
    });
  };

  onClickAdicionar = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    };

    this.props.aoAdicionarNovoPost(novoPost);

    this.setState({
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
    });
  };

  render() {
    return (
      <FormContainer>
        <h3>Novo Post:</h3>
        <InputTexto
          onChange={this.handleNomeUsuario}
          value={this.state.inputNomeUsuario}
          placeholder="Nome do Usuário"
        />
        <InputTexto
          onChange={this.handleFotoUsuario}
          value={this.state.inputFotoUsuario}
          placeholder="Link para foto do Usuário"
        />
        <InputTexto
          onChange={this.handleFotoPost}
          value={this.state.inputFotoPost}
          placeholder="Link da foto do Post"
        />
        <button onClick={this.onClickAdicionar}>Adicionar</button>
      </FormContainer>
    );
  }
}
