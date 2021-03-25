import React, { Component } from "react";
import { isEmpty } from "../../utils/objetoIsEmpty";
import {
  ButtonBuscar,
  ContainerBusca,
  ContainerDadosCidade,
  InputBusca,
} from "./CampoBusca.styled";

export default class CampoBusca extends Component {
  render() {
    return (
      <ContainerBusca>
        <div>
          <InputBusca
            value={this.props.inputBusca}
            onChange={this.props.handleInputBusca}
            placeholder="Digite o Cep (ex. 01000100)"
          />
          <ButtonBuscar onClick={this.props.onClickBuscar}>
            Buscar 🔎
          </ButtonBuscar>
        </div>
        <ContainerDadosCidade>
          {!isEmpty(this.props.cidadeUf) && (
            <p>{`${this.props.cidadeUf.localidade} - ${this.props.cidadeUf.uf}`}</p>
          )}
        </ContainerDadosCidade>
      </ContainerBusca>
    );
  }
}
