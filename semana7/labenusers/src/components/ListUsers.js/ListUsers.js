import React, { Component } from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const UserLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;

  div {
    background-color: white;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const UsersContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #7f8c8d;

  button {
    margin-bottom: 20px;
  }
`;

export default class ListUsers extends Component {
  render() {
    const usersList = this.props.usersList.map((user) => {
      return (
        <UserLine key={user.id}>
          <p>{user.name}</p>
          <div>
            <FontAwesomeIcon
              onClick={() => {
                this.props.onClickDelete(user.id);
              }}
              icon={faWindowClose}
              color={"#e74c3c"}
              size={"lg"}
              cursor="pointer"
            />
          </div>
        </UserLine>
      );
    });
    return (
      <UsersContainer>
        <h2>Registered Users:</h2>
        <button onClick={this.props.onClickChangePage}>Return</button>
        <div>{usersList}</div>
      </UsersContainer>
    );
  }
}
