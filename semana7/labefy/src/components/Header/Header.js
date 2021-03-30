import React, { Component } from "react";
import {
  ContainerHeader,
  Titulo,
  Botao,
  ContainerBotao,
} from "./Header.styled";

export default class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <Titulo tamanho="3em">Labefy</Titulo>
        <ContainerBotao>
          <Botao
            onClick={() => this.props.onClickBotaoPagina(1)}
            tamanho="1.1em"
          >
            Home
          </Botao>
          <Botao
            onClick={() => this.props.onClickBotaoPagina(2)}
            tamanho="1.1em"
          >
            PlayLists
          </Botao>
        </ContainerBotao>
      </ContainerHeader>
    );
  }
}
