import React, { Component } from "react";
import RegisterUser from "./components/RegisterUser.js/RegisterUser";
import styled from "styled-components";
import { createUser } from "./controllers/createUser";
import ListUsers from "./components/ListUsers.js/ListUsers";
import { getAllUsers } from "./controllers/getAllUsers";
import { deleteUser } from "./controllers/deleteUser";

const PrimaryContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #34495e;
`;

export default class App extends Component {
  state = {
    inputName: "",
    inputEmail: "",
    usersList: [],
    listUser: false,
  };

  getAllUsersMiddleware = () => {
    getAllUsers()
      .then((res) => {
        this.setState({
          usersList: res.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  componentDidMount() {
    this.getAllUsersMiddleware();
  }

  componentDidUpdate() {
    this.getAllUsersMiddleware();
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

  onClickChangePage = () => {
    this.setState({
      listUser: !this.state.listUser,
    });
  };

  onClickDelete = (id) => {
    deleteUser(id);
  };

  render() {
    return (
      <PrimaryContainer>
        {!this.state.listUser && (
          <RegisterUser
            inputNome={this.state.inputName}
            inputEmail={this.state.inputEmail}
            onChangeName={this.handleInputName}
            onChangeEmail={this.handleInputEmail}
            onClickRegister={this.onClickRegister}
            onClickChangePage={this.onClickChangePage}
          />
        )}
        {this.state.listUser && (
          <ListUsers
            onClickDelete={this.onClickDelete}
            onClickChangePage={this.onClickChangePage}
            usersList={this.state.usersList}
          />
        )}
      </PrimaryContainer>
    );
  }
}
