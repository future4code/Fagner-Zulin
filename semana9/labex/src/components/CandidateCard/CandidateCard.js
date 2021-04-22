import { Button, Divider, useToast } from '@chakra-ui/react';
import React from 'react';
import { Label } from '../../pages/TripDetailsPage/tripDetailsPage.styled';
import decideCandidate from '../../services/decideCandidate';
import {
  CardContainer,
  ButtonsContainer,
  Name,
  Age,
} from './candidateCard.styled';

export default function CandidateCard({ candidate, tripId, whenDecide }) {
  const { name, age, profession, country, applicationText, id } = candidate;
  const toast = useToast();

  const toApprove = () =>
    toast({
      title: 'Candidatura aprovada',
      description: 'Muito bem, temos mais um astronauta a bordo',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

  const toDecline = () =>
    toast({
      title: 'Candidatura reprovada',
      description: 'Okay, quem sabe numa próxima',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

  const onClickDecide = async (aDecision) => {
    const body = { approve: aDecision };
    const result = await decideCandidate(tripId, id, body);

    if (result.code === 200) {
      whenDecide(true);
      if (aDecision) {
        toApprove();
      } else {
        toDecline();
      }
    }
  };

  return (
    <CardContainer>
      <Name>{name}, </Name> <Age>{age} anos</Age>
      <Divider mt="3" mb="3" />
      <p>
        <Label>Profissão: </Label> {profession}
      </p>
      <p>
        <Label>País: </Label> {country}
      </p>
      <p>
        <Label>Texto de Candidatura: </Label> {applicationText}
      </p>
      <Divider mt="3" mb="3" />
      <ButtonsContainer>
        <Button onClick={() => onClickDecide(true)} colorScheme="green">
          Aprovar
        </Button>
        <Button onClick={() => onClickDecide(false)} colorScheme="red">
          Recusar
        </Button>
      </ButtonsContainer>
    </CardContainer>
  );
}
