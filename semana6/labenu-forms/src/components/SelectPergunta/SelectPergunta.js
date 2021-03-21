import React, { Component } from "react";
import styled from "styled-components";

const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CampoLabel = styled.label`
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 10px;
`;

export default class SelectPergunta extends Component {
  render() {
    return (
      <ContainerSelect>
        <CampoLabel>{this.props.pergunta}</CampoLabel>
        <select onChange={this.props.onChangeEtapa}>
          {this.props.opcoes.map((opcao) => {
            return (
              <option key={opcao.valor} value={opcao.valor}>
                {opcao.texto}
              </option>
            );
          })}
        </select>
      </ContainerSelect>
    );
  }
}
