import React, { Component } from "react";
import styled from "styled-components";
import InputPergunta from "../InputPergunta/InputPergunta";
import SelectPergunta from "../SelectPergunta/SelectPergunta";

const ContainerDadosGerais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

const Erro = styled.p`
  color: #e74c3c;
  text-align: center;
`;

export default class DadosGerais extends Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    naoPreenchido: false,
  };

  onChangeNome = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };

  onChangeIdade = (event) => {
    this.setState({
      idade: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onClickBotao = () => {
    if (
      this.state.nome === "" ||
      this.state.idade === "" ||
      this.state.email === ""
    ) {
      alert("Preencha todas as perguntas da ETAPA 1 antes de prosseguir!");

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
    const valorSelecao = [
      { valor: "medio-incompleto", texto: "Ensino Médio Incompleto" },
      { valor: "medio-completo", texto: "Ensino Médio Completo" },
      { valor: "superior-incompleto", texto: "Ensino Superior Incompleto" },
      { valor: "superior-completo", texto: "Ensino Superior Completo" },
    ];

    return (
      <ContainerDadosGerais>
        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <InputPergunta
            valor={this.state.nome}
            onChangeDado={this.onChangeNome}
            pergunta={"1. Qual é o seu nome?"}
          />
          {this.state.naoPreenchido && this.state.nome === "" && (
            <Erro>Preencha seu nome</Erro>
          )}
          <InputPergunta
            valor={this.state.idade}
            onChangeDado={this.onChangeIdade}
            pergunta={"2. Qual é a sua idade?"}
          />
          {this.state.naoPreenchido && this.state.idade === "" && (
            <Erro>Preencha sua idade</Erro>
          )}
          <InputPergunta
            valor={this.state.email}
            onChangeDado={this.onChangeEmail}
            pergunta={"3. Qual é o seu email?"}
          />
          {this.state.naoPreenchido && this.state.email === "" && (
            <Erro>Preencha seu e-mail</Erro>
          )}
          <SelectPergunta
            onChangeEtapa={this.props.onChangeEtapa}
            pergunta={"4. Qual a sua escolaridade?"}
            opcoes={valorSelecao}
          />
        </div>

        <button onClick={this.onClickBotao}>
          {this.props.finalizar ? "Finalizar" : "Próxima Etapa"}
        </button>
      </ContainerDadosGerais>
    );
  }
}
