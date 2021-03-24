import React, { Component } from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { searchUsers } from "../../controllers/searchUsers";

const UserLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;

  p {
    cursor: pointer;
  }
`;

const ButtonClose = styled.div`
  background-color: white;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  state = {
    inputSearch: "",
    dataSearch: [],
  };

  handleInputSearch = (event) => {
    this.setState({
      inputSearch: event.target.value,
    });
  };

  onClickSearch = () => {
    searchUsers(this.state.inputSearch)
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          this.setState({
            dataSearch: res.data,
          });
        } else {
          console.log("Not found");
          alert("Not found");
        }
      })
      .catch((err) => {
        alert(err.response.data.messenge);
      });

    this.setState({
      inputSearch: "",
    });
  };

  onClickListAll = () => {
    this.setState({
      dataSearch: [],
    });
  };

  render() {
    const usersList = this.props.usersList.map((user) => {
      return (
        <UserLine key={user.id}>
          <p onClick={() => this.props.moreDetails(user.id)}>{user.name}</p>
          <ButtonClose>
            <FontAwesomeIcon
              onClick={() => {
                this.props.onClickDelete(user.id);
              }}
              icon={faWindowClose}
              color={"#e74c3c"}
              size={"lg"}
              cursor="pointer"
            />
          </ButtonClose>
        </UserLine>
      );
    });

    const searchUsers = this.state.dataSearch.map((user) => {
      return (
        <UserLine key={user.id}>
          <p onClick={() => this.props.moreDetails(user.id)}>{user.name}</p>
          <ButtonClose>
            <FontAwesomeIcon
              onClick={() => {
                this.props.onClickDelete(user.id);
              }}
              icon={faWindowClose}
              color={"#e74c3c"}
              size={"lg"}
              cursor="pointer"
            />
          </ButtonClose>
        </UserLine>
      );
    });
    return (
      <UsersContainer>
        <h2>Registered Users:</h2>
        <button onClick={this.props.onClickChangePage}>Return</button>

        <div>
          <input
            onChange={this.handleInputSearch}
            value={this.state.inputSearch}
            placeholder="Name"
          />
          <button onClick={this.onClickSearch}>Search</button>
          <button onClick={this.onClickListAll}>List All</button>
        </div>

        {searchUsers.length > 0 ? (
          <div>{searchUsers}</div>
        ) : (
          <div>{usersList}</div>
        )}
      </UsersContainer>
    );
  }
}
