import React, { Component } from "react";
import styled from "styled-components";

const ComentariosContainer = styled.div`
  width: 94%;
  border: 1px solid gray;
  margin: auto;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
`;

const ItemComentario = styled.p`
  font-size: 0.8em;
  margin: 0;
  margin-bottom: 5px;
`;

export default class SecaoComentarios extends Component {
  render() {
    const listaComentarios = this.props.comentarios.map((comentario, index) => {
      return <ItemComentario key={index}>🔸 {comentario}</ItemComentario>;
    });
    return (
      <ComentariosContainer>
        <p>Comentários:</p>
        {listaComentarios}
      </ComentariosContainer>
    );
  }
}
