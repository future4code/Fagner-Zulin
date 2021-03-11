import React, { Component } from "react";
import "./BotaoCompartilhar.css";

export default class BotaoCompartilhar extends Component {
  imprimeMensagem = () => {
    const msg = `Post compartilhado no ${this.props.nomeBotao}`;
    this.props.onClickBotao(msg);
  };

  render() {
    return (
      <button onClick={this.imprimeMensagem} className="botao-compatilhar">
        <img src={this.props.icone} alt="Icone" />
        <p>{this.props.texto}</p>
      </button>
    );
  }
}
