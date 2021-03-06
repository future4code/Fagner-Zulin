import React, { Component } from "react";
import iconeFacebook from "../../img/facebook.png";
import iconeTwitter from "../../img/twitter.png";
import iconeInstagram from "../../img/instagram.png";
import BotaoCompartilhar from "./BotaoCompartilhar/BotaoCompartilhar";
import styled from "styled-components";

const CompartilharContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 96%;
  }
`;

export default class SecaoCompartilhar extends Component {
  state = {
    valorInput: "",
  };

  onChangeInput = (event) => {
    this.setState({
      valorInput: event.target.value,
    });
  };

  onClickBotaoCompartilhar = (mensagem) => {
    this.props.aoCompartilhar();
    console.log(`${mensagem} com a mensagem: ${this.state.valorInput}`);
  };

  render() {
    return (
      <CompartilharContainer>
        <input onChange={this.onChangeInput} value={this.state.valorInput} />

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
      </CompartilharContainer>
    );
  }
}
