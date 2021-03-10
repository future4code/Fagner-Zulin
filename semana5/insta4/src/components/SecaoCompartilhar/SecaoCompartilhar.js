import React, { Component } from "react";
import iconeFacebook from "../../img/facebook.png";
import iconeTwitter from "../../img/twitter.png";
import iconeInstagram from "../../img/instagram.png";
import BotaoCompartilhar from "./BotaoCompartilhar/BotaoCompartilhar";
import "./SecaoCompartilhar.css";

export default class SecaoCompartilhar extends Component {
  onClickBotaoCompartilhar = (mensagem) => {
    console.log(mensagem);
  };

  render() {
    return (
      <div className="secao-compartilhar">
        <BotaoCompartilhar
          nomeBotao={"Facebook"}
          icone={iconeFacebook}
          texto={"Compartilhe no Facebook"}
          onClickBotao={this.onClickBotaoCompartilhar}
        />
        <BotaoCompartilhar
          nomeBotao={"Twitter"}
          icone={iconeTwitter}
          texto={"Compartilhe no Twitter"}
          onClickBotao={this.onClickBotaoCompartilhar}
        />
        <BotaoCompartilhar
          nomeBotao={"Instagram"}
          icone={iconeInstagram}
          texto={"Compartilhe no Instagram"}
          onClickBotao={this.onClickBotaoCompartilhar}
        />
      </div>
    );
  }
}
