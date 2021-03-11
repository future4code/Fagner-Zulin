import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;

export default function IconeComContador(props) {
  return (
    <IconContainer>
      <img alt={"Icone"} src={props.icone} onClick={props.onClickIcone} />
      <p>{props.valorContador}</p>
    </IconContainer>
  );
}
