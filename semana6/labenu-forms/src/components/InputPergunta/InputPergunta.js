import React, { Component } from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CampoInput = styled.input`
  height: 2em;
  padding: 3px;
  width: 300px;
  border-radius: 5px;
  margin: 20px 0;
`;

const CampoLabel = styled.label`
  font-size: 1.2em;
  font-weight: 500;
`;

export default class InputPergunta extends Component {
  render() {
    return (
      <ContainerInput>
        <CampoLabel>{this.props.pergunta}</CampoLabel>
        <CampoInput
          type="text"
          value={this.props.valor}
          onChange={this.props.onChangeDado}
        />
      </ContainerInput>
    );
  }
}
