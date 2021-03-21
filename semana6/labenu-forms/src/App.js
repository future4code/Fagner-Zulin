import React, { Component } from "react";
import styled from "styled-components";
import Agradecimento from "./components/Agradecimento/Agradecimento";
import ComCursoSuperior from "./components/ComCursoSuperior/ComCursoSuperior";
import DadosGerais from "./components/DadosGerais/DadosGerais";
import SemCursoSuperior from "./components/SemCursoSuperior/SemCursoSuperior";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
  width: 600px;
  margin: 100px auto;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #cad3c8;
`;

export default class App extends Component {
  state = {
    etapa: 0,
    escolaridade: "medio-incompleto",
    prosseguir: true,
    finalizar: false,
  };

  onClickProximaEtapa = () => {
    if (this.state.finalizar) {
      this.setState({
        etapa: 3,
      });
    } else if (
      this.state.escolaridade === "medio-incompleto" ||
      this.state.escolaridade === "medio-completo"
    ) {
      this.setState({
        etapa: 2,
        finalizar: true,
      });
    } else {
      this.setState({
        etapa: 1,
        finalizar: true,
      });
    }
  };

  onChangeEtapa = (event) => {
    this.setState({
      escolaridade: event.target.value,
    });
  };

  render() {
    return (
      <ContainerPrincipal>
        {this.state.etapa === 0 && (
          <DadosGerais
            onChangeEtapa={this.onChangeEtapa}
            funcaoBotao={this.onClickProximaEtapa}
            finalizar={this.state.finalizar}
          />
        )}
        {this.state.etapa === 1 && (
          <ComCursoSuperior
            funcaoBotao={this.onClickProximaEtapa}
            finalizar={this.state.finalizar}
          />
        )}
        {this.state.etapa === 2 && (
          <SemCursoSuperior
            funcaoBotao={this.onClickProximaEtapa}
            finalizar={this.state.finalizar}
          />
        )}
        {this.state.etapa === 3 && <Agradecimento />}

        {/* {!(this.state.etapa === 3) && (
          <button onClick={this.onClickProximaEtapa}>
            {this.state.finalizar ? "Finalizar" : "Próxima Etapa"}
          </button>
        )} */}
      </ContainerPrincipal>
    );
  }
}
