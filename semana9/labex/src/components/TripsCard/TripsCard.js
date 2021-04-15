import React from 'react';
import CandidateFormModal from '../CandidateFormModal/CandidateFormModal';
import {
  CardContainer,
  DescriptionContainer,
  DescriptionLabel,
  NamePlanet,
} from './tripsCard.styled';

export default function TripsCard() {
  return (
    <CardContainer>
      <NamePlanet>Netuno</NamePlanet>
      <h2>Surfando em Netuno</h2>
      <DescriptionContainer>
        <p>
          <DescriptionLabel>Descrição: </DescriptionLabel>Único tour que fazemos
          em planeta anão no sistema solar! Levem casacos que a previsão é de
          −230 °C
        </p>
        <p>
          <DescriptionLabel>Duração: </DescriptionLabel> 540 dias
        </p>
        <p>
          <DescriptionLabel>Partida em: </DescriptionLabel> 21/12/20
        </p>
      </DescriptionContainer>
      <CandidateFormModal />
    </CardContainer>
  );
}
