import React, { Component } from "react";
import styled from "styled-components";

const BotaoCompatilhar = styled.button`
  display: flex;
  align-items: center;
  width: 98%;
  margin: 3px 0 3px 0;
  cursor: pointer;

  img {
    width: 30px;
  }

  p {
    margin-left: 5px;
  }
`;

export default class BotaoCompartilhar extends Component {
  imprimeMensagem = () => {
    const msg = `Post compartilhado no ${this.props.nomeBotao}`;
    this.props.onClickBotao(msg);
  };

  render() {
    return (
      <BotaoCompatilhar onClick={this.imprimeMensagem}>
        <img src={this.props.icone} alt="Icone" />
        <p>{this.props.texto}</p>
      </BotaoCompatilhar>
    );
  }
}
