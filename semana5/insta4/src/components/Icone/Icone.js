import React, { Component } from "react";
import styled from "styled-components";

const IconeContainer = styled.div`
  cursor: pointer;
`;

export default class Icone extends Component {
  render() {
    return (
      <IconeContainer>
        <img
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.props.onClickIcone}
        />
      </IconeContainer>
    );
  }
}
