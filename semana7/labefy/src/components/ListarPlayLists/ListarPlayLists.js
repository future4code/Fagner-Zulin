import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faSpinner,
  faPlusCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { pegarPlayLists } from "../../controllers/pegarPlayLists";
import { Container, Mensagem } from "../CriarPlayLists/CriarPlayLists.styled";
import { ContainerHeader, LinhaPlayList } from "./ListarPlayLists.styled";
import { deletarPlayList } from "../../controllers/deletarPlayList";

export default class ListarPlayLists extends Component {
  state = {
    listaDePlayLists: [],
    mensagem: "",
    carregando: true,
  };

  pegarPlayListsMiddleware = async () => {
    const result = await pegarPlayLists();

    if (result === -1) {
      this.setState({
        mensagem: "🤷🏽‍♀️ Não há nada por por aqui 🤷🏽‍♂️",
        carregando: false,
      });
    } else {
      this.setState({
        listaDePlayLists: result,
        mensagem: "",
        carregando: false,
      });
    }
  };

  componentDidMount() {
    this.pegarPlayListsMiddleware();
  }

  componentDidUpdate() {
    this.pegarPlayListsMiddleware();
  }

  onClickDeletar = (id) => {
    deletarPlayList(id);
  };

  render() {
    const listaDePlayLists = this.state.listaDePlayLists.map((playlist) => {
      return (
        <LinhaPlayList key={playlist.id}>
          <span>{playlist.name}</span>
          <div>
            <FontAwesomeIcon
              cursor="pointer"
              color="#ed8c2b"
              icon={faPlayCircle}
              onClick={() => this.props.onClickTocaPlayList(4, playlist.id)}
              className="icone"
            />
            <FontAwesomeIcon
              cursor="pointer"
              color="#88A825"
              icon={faPlusCircle}
              onClick={() => this.props.onClickAddMusica(3, playlist)}
              className="icone"
            />
            <FontAwesomeIcon
              cursor="pointer"
              color="#CF4A30"
              icon={faTimesCircle}
              onClick={() => this.onClickDeletar(playlist.id)}
            />
          </div>
        </LinhaPlayList>
      );
    });

    return (
      <Container justifyContent="unset">
        <ContainerHeader>
          <h2>PlayLists</h2>
          <Mensagem>{this.state.mensagem}</Mensagem>
        </ContainerHeader>
        {this.state.carregando && (
          <FontAwesomeIcon size="2x" color="#ed8c2b" spin icon={faSpinner} />
        )}
        {listaDePlayLists}
      </Container>
    );
  }
}
