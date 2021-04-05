import React, { Component } from "react";
import { createUser } from "../../controllers/createUser";
import { ButtonsContainer, RegisterUserContainer } from "./registerUserStyled";

export default class RegisterUser extends Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleInputName = (event) => {
    this.setState({
      inputName: event.target.value,
    });
  };

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  onClickRegister = () => {
    const user = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    createUser(user);

    this.setState({
      inputName: "",
      inputEmail: "",
    });
  };

  render() {
    return (
      <RegisterUserContainer>
        <label>Name:</label>
        <input value={this.state.inputName} onChange={this.handleInputName} />
        <label>E-mail:</label>
        <input value={this.state.inputEmail} onChange={this.handleInputEmail} />
        <ButtonsContainer>
          <button onClick={this.onClickRegister}>Register</button>
          <button onClick={this.props.onClickChangePage}>List Users</button>
        </ButtonsContainer>
      </RegisterUserContainer>
    );
  }
}
