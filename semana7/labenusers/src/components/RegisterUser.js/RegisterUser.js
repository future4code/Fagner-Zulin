import React, { Component } from "react";

export default class RegisterUser extends Component {
  render() {
    return (
      <div>
        <label>Nome:</label>
        <input
          value={this.props.inputNome}
          onChange={this.props.onChangeNome}
        />
        <label>E-mail:</label>
        <input
          value={this.props.inputEmail}
          onChange={this.props.onChangeEmail}
        />
        <div>
          <button>Registrar</button>
          <button>Lista de Usuários</button>
        </div>
      </div>
    );
  }
}
