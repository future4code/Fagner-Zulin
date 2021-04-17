import { Button, Divider } from '@chakra-ui/react';
import React from 'react';
import { Label } from '../../pages/TripDetailsPage/tripDetailsPage.styled';
import {
  CardContainer,
  ButtonsContainer,
  Name,
  Age,
} from './candidateCard.styled';

export default function CandidateCard() {
  return (
    <CardContainer>
      <Name>Fagner, </Name> <Age>25 anos</Age>
      <Divider mt="3" mb="3" />
      <p>
        <Label>Profissão: </Label> Desenvolvedor
      </p>
      <p>
        <Label>País: </Label> Brasil
      </p>
      <p>
        <Label>Texto de Candidatura: </Label> Agora vai... Eu quero muito ir...
        me chama que eu vou
      </p>
      <Divider mt="3" mb="3" />
      <ButtonsContainer>
        <Button colorScheme="green">Aprovar</Button>
        <Button colorScheme="red">Recusar</Button>
      </ButtonsContainer>
    </CardContainer>
  );
}
