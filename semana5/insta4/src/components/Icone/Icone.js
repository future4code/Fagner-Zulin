import React, { Component } from "react";

export default class Icone extends Component {
  render() {
    return (
      <div>
        <img
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.props.onClickIcone}
        />
      </div>
    );
  }
}
