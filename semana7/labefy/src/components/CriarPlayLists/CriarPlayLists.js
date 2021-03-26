import React, { Component } from "react";
import { criarPlayList } from "../../controllers/criarPlayList";
import { Botao } from "../Header/Header.styled";
import { Container, InputNome, Mensagem } from "./CriarPlayLists.styled";

export default class CriarPlayLists extends Component {
  state = {
    inputNome: "",
    mensagem: "",
  };

  handleInputNome = (event) => {
    this.setState({
      inputNome: event.target.value,
      mensagem: "",
    });
  };

  onClickCriarPlaylist = async () => {
    if (this.state.inputNome === "") {
      this.setState({
        mensagem: "Valor inválido, por favor insira um nome no campo!",
      });
    } else {
      const body = {
        name: this.state.inputNome,
      };

      const resul = await criarPlayList(body);

      this.setState({
        mensagem: resul,
        inputNome: "",
      });
    }
  };

  render() {
    return (
      <Container justifyContent="space-around">
        <h2>Crie sua PlayList</h2>

        <InputNome
          value={this.state.inputNome}
          onChange={this.handleInputNome}
          placeholder="Digite o nome da PlayList"
        />
        <Botao onClick={this.onClickCriarPlaylist}>Criar PlayList 🎶</Botao>

        <Mensagem>{this.state.mensagem}</Mensagem>
      </Container>
    );
  }
}
