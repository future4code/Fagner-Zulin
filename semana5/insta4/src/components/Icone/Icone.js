import React, { Component } from "react";
import "./Icone.css";

export default class Icone extends Component {
  render() {
    return (
      <div className="icone">
        <img
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.props.onClickIcone}
        />
      </div>
    );
  }
}
