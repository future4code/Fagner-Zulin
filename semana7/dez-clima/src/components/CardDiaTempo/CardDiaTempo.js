import React, { Component } from "react";

import { imagemClima } from "../../utils/emojisTempo";
import {
  ContainerCard,
  ContainerSitacaoTempo,
  ImagemTempo,
  ContainerDia,
  ContainerTemperatura,
} from "./CardDiaTempo.styled";

export default class CardDiaTempo extends Component {
  render() {
    const {
      condition,
      date,
      description,
      max,
      min,
      weekday,
    } = this.props.previsao;

    return (
      <ContainerCard>
        <ContainerSitacaoTempo>
          <ImagemTempo src={imagemClima(condition)} />
          <p>{description}</p>
        </ContainerSitacaoTempo>
        <ContainerDia>
          <p>{`${weekday} ${date}`}</p>
        </ContainerDia>
        <ContainerTemperatura>
          <span>{`Min: ${min}°`}</span>
          <span>{`Max: ${max}°`}</span>
        </ContainerTemperatura>
      </ContainerCard>
    );
  }
}
