import { Divider } from '@chakra-ui/react';
import React from 'react';
import CandidateFormModal from '../CandidateFormModal/CandidateFormModal';
import {
  CardContainer,
  DescriptionContainer,
  DescriptionLabel,
  NamePlanet,
} from './tripsCard.styled';

export default function TripsCard({ trip }) {
  const { planet, name, description, durationInDays, date, id } = trip;

  const toApplyData = { planet, name, id };

  return (
    <CardContainer>
      <NamePlanet>{planet}</NamePlanet>
      <Divider />
      <h2>{name}</h2>
      <DescriptionContainer>
        <p>
          <DescriptionLabel>Descrição: </DescriptionLabel>
          {description}
        </p>
        <p>
          <DescriptionLabel>Duração: </DescriptionLabel> {durationInDays} dias
        </p>
        <p>
          <DescriptionLabel>Partida em: </DescriptionLabel> {date}
        </p>
      </DescriptionContainer>
      <CandidateFormModal toApplyData={toApplyData} />
    </CardContainer>
  );
}
