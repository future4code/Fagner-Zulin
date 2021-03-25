import React, { Component } from "react";
import styled from "styled-components";
import { imagemClima } from "../../utils/emojisTempo";

const ContainerCard = styled.div`
  background-color: #dff9fb;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

const Emoji = styled.img`
  width: 3em;
`;

const ContainerSitacaoTempo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

const ContainerDia = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerTemperatura = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

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
          <Emoji src={imagemClima(condition)} />
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
