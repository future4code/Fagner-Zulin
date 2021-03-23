import React, { Component } from "react";
import styled from "styled-components";
import InputPergunta from "../InputPergunta/InputPergunta";

const ContainerComCursoSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;

  h2 {
    text-align: center;
  }
`;

const Erro = styled.p`
  color: #e74c3c;
  text-align: center;
`;

export default class ComCursoSuperior extends Component {
  state = {
    curso: "",
    unidadeEnsino: "",
    naoPreenchido: false,
  };

  onChangeCurso = (event) => {
    this.setState({
      curso: event.target.value,
    });
  };

  onChangeUnidadeEnsino = (event) => {
    this.setState({
      unidadeEnsino: event.target.value,
    });
  };

  onClickBotao = () => {
    if (this.state.curso === "" || this.state.unidadeEnsino === "") {
      alert("Preencha todas as perguntas da ETAPA 2 antes de prosseguir!");
      this.setState({
        naoPreenchido: true,
      });
    } else {
      this.setState({
        naoPreenchido: false,
      });
      this.props.funcaoBotao();
    }
  };

  render() {
    return (
      <ContainerComCursoSuperior>
        <div>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <InputPergunta
            valor={this.state.curso}
            onChangeDado={this.onChangeCurso}
            pergunta={"1. Qual o curso?"}
          />
          {this.state.naoPreenchido && this.state.curso === "" && (
            <Erro>Preencha seu curso</Erro>
          )}
          <InputPergunta
            valor={this.state.unidadeEnsino}
            onChangeDado={this.onChangeUnidadeEnsino}
            pergunta={"2. Qual a unidade de ensino?"}
          />
          {this.state.naoPreenchido && this.state.unidadeEnsino === "" && (
            <Erro>Preencha sua unidade de ensino</Erro>
          )}
        </div>
        <button onClick={this.onClickBotao}>
          {this.props.finalizar ? "Finalizar" : "Próxima Etapa"}
        </button>
      </ContainerComCursoSuperior>
    );
  }
}
