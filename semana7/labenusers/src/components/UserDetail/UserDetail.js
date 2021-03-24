import React, { Component } from "react";
import styled from "styled-components";
import { editUser } from "../../controllers/editUser";

const UserDetailsContainer = styled.div`
  background-color: #bdc3c7;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const ButtonsContainer = styled.div`
  margin-top: 50px;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export default class UserDetail extends Component {
  state = {
    toEdit: false,
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
    this.props.onClickDelete(id);
    this.props.changePageDetails();
  };

  render() {
    const { id, name, email } = this.props.userData;
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
