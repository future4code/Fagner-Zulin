import React, { Component } from "react";
import styled from "styled-components";

const ContainerAgradecimento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Agradecimento extends Component {
  render() {
    return (
      <ContainerAgradecimento>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </ContainerAgradecimento>
    );
  }
}
