import React, { Component } from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchUsers } from "../../controllers/searchUsers";
import { UserLine, ButtonClose, UsersContainer } from "./listUsersStyled";
import { getAllUsers } from "../../controllers/getAllUsers";
import { deleteUser } from "../../controllers/deleteUser";

export default class ListUsers extends Component {
  state = {
    usersList: [],
    inputSearch: "",
    dataSearch: [],
  };

  getAllUsersMiddleware = async () => {
    const result = await getAllUsers();
    if (result.length > 0) {
      this.setState({
        usersList: result,
      });
    }
  };

  componentDidMount() {
    this.getAllUsersMiddleware();
  }

  componentDidUpdate() {
    this.getAllUsersMiddleware();
  }

  handleInputSearch = (event) => {
    this.setState({
      inputSearch: event.target.value,
    });
  };

  onClickDelete = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      deleteUser(id);
    }
  };

  onClickSearch = async () => {
    const result = await searchUsers(this.state.inputSearch);

    if (result.length > 0) {
      this.setState({
        dataSearch: result,
      });
    } else {
      alert("Not found");
    }

    this.setState({
      inputSearch: "",
    });
  };

  onClickListAll = () => {
    this.setState({
      dataSearch: [],
    });
  };

  renderList = (list) => {
    const mapList = list.map((user) => {
      return (
        <UserLine key={user.id}>
          <p onClick={() => this.props.moreDetails(user.id)}>{user.name}</p>
          <ButtonClose>
            <FontAwesomeIcon
              onClick={() => {
                this.onClickDelete(user.id);
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
    return mapList;
  };

  render() {
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

        {this.state.dataSearch.length > 0 ? (
          <div>{this.renderList(this.state.dataSearch)}</div>
        ) : (
          <div>{this.renderList(this.state.usersList)}</div>
        )}
      </UsersContainer>
    );
  }
}
