import React, { Component } from "react";
import styled from "styled-components";

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
        <ButtonsContainer>
          <button onClick={this.props.changePageDetails}>Return</button>
          <button onClick={() => this.onClickDelete(id)}>Delete</button>
        </ButtonsContainer>
      </UserDetailsContainer>
    );
  }
}
