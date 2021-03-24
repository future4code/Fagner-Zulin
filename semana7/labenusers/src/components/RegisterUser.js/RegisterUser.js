import React, { Component } from "react";
import styled from "styled-components";

const RegisterUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 100px 20px 0 20px;
  background-color: #95a5a6;

  input {
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 5px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export default class RegisterUser extends Component {
  render() {
    return (
      <RegisterUserContainer>
        <label>Name:</label>
        <input
          value={this.props.inputName}
          onChange={this.props.onChangeName}
        />
        <label>E-mail:</label>
        <input
          value={this.props.inputEmail}
          onChange={this.props.onChangeEmail}
        />
        <ButtonsContainer>
          <button onClick={this.props.onClickRegister}>Register</button>
          <button onClick={this.props.onClickChangePage}>List Users</button>
        </ButtonsContainer>
      </RegisterUserContainer>
    );
  }
}
