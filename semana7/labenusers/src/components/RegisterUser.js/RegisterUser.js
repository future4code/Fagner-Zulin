import React, { Component } from "react";

export default class RegisterUser extends Component {
  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          value={this.props.inputName}
          onChange={this.props.onChangeName}
        />
        <label>E-mail:</label>
        <input
          value={this.props.inputEmail}
          onChange={this.props.onChangeEmail}
        />
        <div>
          <button onClick={this.props.onClickRegister}>Register</button>
          <button onClick={this.props.onClickChangePage}>List Users</button>
        </div>
      </div>
    );
  }
}
