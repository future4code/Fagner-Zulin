import React, { Component } from "react";
import { deleteUser } from "../../controllers/deleteUser";
import { editUser } from "../../controllers/editUser";
import { getUserById } from "../../controllers/getUserById";
import { ButtonsContainer, UserDetailsContainer } from "./userDetailStyled";

export default class UserDetail extends Component {
  state = {
    userData: {},
    toEdit: false,
    inputName: "",
    inputEmail: "",
  };

  getUserByIdMiddleware = async () => {
    const result = await getUserById(this.props.userId);

    this.setState({
      userData: result,
    });
  };

  componentDidMount() {
    this.getUserByIdMiddleware();
  }

  componentDidUpdate() {
    this.getUserByIdMiddleware();
  }

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

  onClickToEditOrSave = () => {
    this.setState({
      toEdit: !this.state.toEdit,
    });
  };

  onClickSave = (id) => {
    const newData = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    editUser(id, newData);

    this.onClickToEditOrSave();
  };

  onClickDelete = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      deleteUser(id);
    }
    this.props.changePageDetails();
  };

  render() {
    const { id, name, email } = this.state.userData;
    return (
      <UserDetailsContainer>
        <p>Name: {name}</p>
        <p>E-mail: {email}</p>
        {this.state.toEdit && (
          <div>
            <input
              onChange={this.handleInputName}
              placeholder="Name"
              value={this.state.inputName}
            />
            <input
              onChange={this.handleInputEmail}
              placeholder="E-mail"
              value={this.state.inputEmail}
            />
            <button onClick={() => this.onClickSave(id)}>Save</button>
          </div>
        )}
        <ButtonsContainer>
          <button onClick={this.props.changePageDetails}>Return</button>
          {!this.state.toEdit && (
            <button onClick={this.onClickToEditOrSave}>To Edit</button>
          )}
          <button onClick={() => this.onClickDelete(id)}>Delete</button>
        </ButtonsContainer>
      </UserDetailsContainer>
    );
  }
}
