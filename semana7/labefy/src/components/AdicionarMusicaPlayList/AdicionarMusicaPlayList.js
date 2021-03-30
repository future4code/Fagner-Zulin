import React, { Component } from "react";
import { adicionarMusicaNaPlayList } from "../../controllers/adicionarMusicaNaPlayList";
import {
  InputNome,
  Container,
  Mensagem,
} from "../CriarPlayLists/CriarPlayLists.styled";
import { Botao } from "../Header/Header.styled";

export default class AdicionarMusicaPlayList extends Component {
  state = {
    inputNome: "",
    inputArtista: "",
    inputLink: "",
    mensage: "",
  };

  handleInputNome = (event) => {
    this.setState({ inputNome: event.target.value, mensage: "" });
  };

  handleInputArtista = (event) => {
    this.setState({ inputArtista: event.target.value, mensage: "" });
  };

  handleInputLink = (event) => {
    this.setState({ inputLink: event.target.value, mensage: "" });
  };

  onClickAdicionar = async () => {
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputLink,
    };

    const result = await adicionarMusicaNaPlayList(
      this.props.playlist.id,
      body
    );

    this.setState({
      mensage: result,
      inputNome: "",
      inputArtista: "",
      inputLink: "",
    });
  };

  render() {
    return (
      <Container justifyContent="space-around">
        <h2>PlayList: {this.props.playlist.name}</h2>

        <InputNome
          value={this.state.inputNome}
          onChange={this.handleInputNome}
          placeholder="Digite o nome da Música"
        />
        <InputNome
          value={this.state.inputArtista}
          onChange={this.handleInputArtista}
          placeholder="Digite o nome do Artista/Banda"
        />
        <InputNome
          value={this.state.inputLink}
          onChange={this.handleInputLink}
          placeholder="Link da Música no YouTube"
        />
        <Botao onClick={this.onClickAdicionar}>Adicionar Música 🎶</Botao>

        <Mensagem>{this.state.mensage}</Mensagem>
      </Container>
    );
  }
}
