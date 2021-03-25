import React, { Component } from "react";
import styled from "styled-components";
import CampoBusca from "./components/CampoBusca/CampoBusca";
import CardDiaTempo from "./components/CardDiaTempo/CardDiaTempo";
import { getEndereco } from "./controllers/getEndereco";
import { getPrevisaoDezDias } from "./controllers/getPrevisaoDezDias";
import { testaInputCep } from "./utils/testaCep";

const ContainerPrincipal = styled.div`
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerCards = styled.div`
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class App extends Component {
  state = {
    inputBusca: "",
    cidadeUf: {},
    previsaoDezDias: [],
  };

  handleInputBusca = (event) => {
    this.setState({
      inputBusca: event.target.value,
    });
  };

  onClickBuscar = async () => {
    if (testaInputCep(this.state.inputBusca)) {
      alert("Digite o Cep corretamente! (Ex. 01000100)");

      this.setState({
        inputBusca: "",
      });
    } else {
      const retorno = await this.getResulApi();

      if (retorno === "CEP não encontrado") {
        alert(retorno);
      } else {
        this.setState({
          cidadeUf: retorno.result,
          previsaoDezDias: retorno.listaPrevisao,
        });
      }
    }
  };

  getResulApi = async () => {
    const result = await getEndereco(this.state.inputBusca);

    if (result) {
      const { localidade, uf } = result;
      const listaPrevisao = await getPrevisaoDezDias(localidade, uf);

      return {
        result,
        listaPrevisao,
      };
    } else {
      return "CEP não encontrado";
    }
  };

  render() {
    const listaCardPrevisao = this.state.previsaoDezDias.map(
      (previsao, index) => {
        return <CardDiaTempo key={index} previsao={previsao} />;
      }
    );

    return (
      <ContainerPrincipal>
        <h1>Dez Clima 🍃 </h1>
        <CampoBusca
          inputBusca={this.state.inputBusca}
          handleInputBusca={this.handleInputBusca}
          onClickBuscar={this.onClickBuscar}
          cidadeUf={this.state.cidadeUf}
        />
        <ContainerCards>{listaCardPrevisao}</ContainerCards>
      </ContainerPrincipal>
    );
  }
}
