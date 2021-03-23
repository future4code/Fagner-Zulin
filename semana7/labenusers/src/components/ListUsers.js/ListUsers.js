import React, { Component } from "react";

export default class ListUsers extends Component {
  render() {
    const usersList = this.props.usersList.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button
            onClick={() => {
              this.props.onClickDelete(user.id);
            }}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div>
        <h2>Registered Users:</h2>
        <div>{usersList}</div>
        <button onClick={this.props.onClickChangePage}>Return</button>
      </div>
    );
  }
}
