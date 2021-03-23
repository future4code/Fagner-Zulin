import React, { Component } from "react";
import RegisterUser from "./components/RegisterUser.js/RegisterUser";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default class App extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  handleInputName = (event) => {
    this.setState({
      inputNome: event.target.value,
    });
  };

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  render() {
    return (
      <ContainerPrincipal>
        <RegisterUser
          inputNome={this.state.inputNome}
          inputEmail={this.state.inputEmail}
          onChangeNome={this.handleInputName}
          onChangeEmail={this.handleInputEmail}
        />
      </ContainerPrincipal>
    );
  }
}
