import React, { Component } from "react";
import styled from "styled-components";
import { Titulo } from "../Header/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const ContainerFooter = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerIcones = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100px;
  justify-content: space-between;

  .icone {
    font-size: 1.5em;
    color: #ed8c2b;
    cursor: pointer;
  }

  .icone:hover {
    color: #cf4a30;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <ContainerFooter>
        <Titulo>Labefy</Titulo>
        <ContainerIcones>
          <FontAwesomeIcon className={"icone"} icon={faFacebookSquare} />
          <FontAwesomeIcon className={"icone"} icon={faInstagramSquare} />
          <FontAwesomeIcon className={"icone"} icon={faTwitterSquare} />
        </ContainerIcones>
      </ContainerFooter>
    );
  }
}
