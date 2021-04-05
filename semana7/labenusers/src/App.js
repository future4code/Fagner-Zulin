import React, { Component } from "react";
import RegisterUser from "./components/RegisterUser.js/RegisterUser";
import styled from "styled-components";
import ListUsers from "./components/ListUsers.js/ListUsers";
import UserDetail from "./components/UserDetail/UserDetail";

const PrimaryContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #34495e;
`;

export default class App extends Component {
  state = {
    listUser: false,
    userDetail: false,
    userId: "",
  };

  onClickChangePage = () => {
    this.setState({
      listUser: !this.state.listUser,
    });
  };

  moreDetails = (id) => {
    this.setState({ userId: id });
    this.changePageDetails();
  };

  changePageDetails = () => {
    this.setState({
      userDetail: !this.state.userDetail,
      listUser: !this.state.listUser,
    });
  };

  render() {
    return (
      <PrimaryContainer>
        {!this.state.listUser && !this.state.userDetail && (
          <RegisterUser onClickChangePage={this.onClickChangePage} />
        )}
        {this.state.listUser && (
          <ListUsers
            onClickChangePage={this.onClickChangePage}
            moreDetails={this.moreDetails}
          />
        )}

        {this.state.userDetail && (
          <UserDetail
            changePageDetails={this.changePageDetails}
            userId={this.state.userId}
          />
        )}
      </PrimaryContainer>
    );
  }
}
