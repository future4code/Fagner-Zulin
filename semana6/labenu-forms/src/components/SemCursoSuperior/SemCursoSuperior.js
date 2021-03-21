import React, { Component } from "react";
import styled from "styled-components";
import InputPergunta from "../InputPergunta/InputPergunta";
import SelectPergunta from "../SelectPergunta/SelectPergunta";

const ContainerSemCursoSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;

  h2 {
    text-align: center;
  }
`;

export default class SemCursoSuperior extends Component {
  state = {
    motivoNaoTerminar: "",
  };

  onChangeMotivoNaoTerminar = (event) => {
    this.setState({
      motivoNaoTerminar: event.target.value,
    });
  };

  onClickBotao = () => {
    if (this.state.motivoNaoTerminar === "") {
      alert("Preencha todas as perguntas da ETAPA 3 antes de prosseguir!");
    } else {
      this.props.funcaoBotao();
    }
  };

  render() {
    const valorSelecao = [
      { valor: "nenhum", texto: "Nenhum" },
      { valor: "curso-ingles", texto: "Curso de Inglês" },
      { valor: "curso-técnico", texto: "Curso Técnico" },
    ];

    return (
      <ContainerSemCursoSuperior>
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <InputPergunta
            valor={this.state.motivoNaoTerminar}
            onChangeDado={this.onChangeMotivoNaoTerminar}
            pergunta={"1. Por que você não terminou um curso de graduação?"}
          />

          <SelectPergunta
            pergunta={"2. Você fez algum curso complementar?"}
            opcoes={valorSelecao}
          />
        </div>

        <button onClick={this.onClickBotao}>
          {this.props.finalizar ? "Finalizar" : "Próxima Etapa"}
        </button>
      </ContainerSemCursoSuperior>
    );
  }
}
