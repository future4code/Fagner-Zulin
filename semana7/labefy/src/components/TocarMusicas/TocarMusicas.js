import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import { deletarMusica } from "../../controllers/deletarMusica";
import { pegarMusicasDaPlayList } from "../../controllers/pegarMusicasDaPlayList";
import { Mensagem } from "../CriarPlayLists/CriarPlayLists.styled";
import { Botao } from "../Header/Header.styled";
import { ContainerMusicas, InputRange } from "./TocarMusicas.styled";

export default class TocarMusicas extends Component {
  state = {
    listaDeMusicas: [],
    mensagem: "",
    carregando: true,
    inputRange: "0",
    id: "",
    nome: "",
    artista: "",
    url: "",
  };

  pegarMusicasMiddleware = async () => {
    const result = await pegarMusicasDaPlayList(this.props.idPlayList);

    if (result === -1) {
      this.setState({
        mensagem: "🤷🏽‍♀️ Não há nada por por aqui 🤷🏽‍♂️",
        carregando: false,
      });
    } else {
      const { id, name, artist, url } = result[0];
      this.setState({
        listaDeMusicas: result,
        mensagem: "",
        carregando: false,
        id: id,
        nome: name,
        artista: artist,
        url: url,
      });
    }
  };

  atualizaListaMusicas = async (index) => {
    const result = await pegarMusicasDaPlayList(this.props.idPlayList);

    if (result === -1) {
      this.setState({
        mensagem: "🤷🏽‍♀️ Não há nada por por aqui 🤷🏽‍♂️",
        carregando: false,
      });
    } else {
      let videoInicial;
      console.log(index - result.length);
      if (index - result.length <= 0) {
        console.log("final");
        videoInicial = result[index - 1];
      } else {
        console.log("meio");
        videoInicial = result[index + 1];
      }

      const { id, name, artist, url } = videoInicial;
      this.setState({
        listaDeMusicas: result,
        mensagem: "",
        carregando: false,
        id: id,
        nome: name,
        artista: artist,
        url: url,
      });
    }
  };

  componentDidMount() {
    this.pegarMusicasMiddleware();
  }

  handleInputRange = (event) => {
    const index = event.target.value;
    this.defineEstadoVideo(index);
  };

  onClickApagar = async () => {
    await deletarMusica(this.props.idPlayList, this.state.id);
    this.atualizaListaMusicas(Number(this.state.inputRange));
  };

  aoAcabar = () => {
    const index = Number(this.state.inputRange);
    const tamanhoArray = this.state.listaDeMusicas.length;

    if (index === tamanhoArray - 1) {
      this.defineEstadoVideo(0);
    } else {
      this.defineEstadoVideo(index + 1);
    }
  };

  defineEstadoVideo = (index) => {
    const { id, name, artist, url } = this.state.listaDeMusicas[index];

    this.setState({
      inputRange: index,
      id: id,
      nome: name,
      artista: artist,
      url: url,
    });
  };

  render() {
    return (
      <ContainerMusicas>
        {!this.state.carregando && !this.state.mensagem && (
          <ContainerMusicas>
            <ReactPlayer
              playing={true}
              className="player"
              controls={true}
              onEnded={this.aoAcabar}
              url={this.state.url}
            />
            <InputRange
              onChange={this.handleInputRange}
              value={this.state.inputRange}
              type="range"
              min="0"
              max={this.state.listaDeMusicas.length - 1}
            />
            <Mensagem>
              {this.state.nome} - {this.state.artista}
            </Mensagem>
            <Botao onClick={this.onClickApagar}>Apagar Música ❌</Botao>
          </ContainerMusicas>
        )}
        <Mensagem>{this.state.mensagem}</Mensagem>

        {this.state.carregando && (
          <FontAwesomeIcon size="3x" color="#ed8c2b" spin icon={faSpinner} />
        )}
      </ContainerMusicas>
    );
  }
}
