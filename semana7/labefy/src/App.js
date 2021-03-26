import React, { Component } from "react";
import styled from "styled-components";
import CriarPlayLists from "./components/CriarPlayLists/CriarPlayLists";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListarPlayLists from "./components/ListarPlayLists/ListarPlayLists";

const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContainerSessoes = styled.div`
  margin: auto;
  width: 80vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends Component {
  state = {
    pagina: 1,
  };

  onClickBotaoPagina = (numPagina) => {
    this.setState({
      pagina: numPagina,
    });
  };

  render() {
    return (
      <ContainerPrincipal>
        <Header onClickBotaoPagina={this.onClickBotaoPagina} />
        <ContainerSessoes>
          {this.state.pagina === 1 && <CriarPlayLists />}
          {this.state.pagina === 2 && <ListarPlayLists />}
        </ContainerSessoes>
        <Footer />
      </ContainerPrincipal>
    );
  }
}
