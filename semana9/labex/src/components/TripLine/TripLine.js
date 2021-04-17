import { Button, useToast } from '@chakra-ui/react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import deleteTrip from '../../services/deleteTrip';
import { NamePlanet, NameTrip } from './tripLine.styled';
import { gotToTripDetailsPage } from '../../routers/coordinates';

export default function TripLine({ trip, whenDelete, history }) {
  const { name, planet, id } = trip;
  const toast = useToast();

  const alertSuccess = () => {
    toast({
      title: 'Viagem Deletada!',
      description: 'A operação foi realizada com sucesso',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  };

  const onClickDelete = async () => {
    const result = await deleteTrip(id);
    if (result.code === 200) {
      whenDelete(true);
      alertSuccess();
    }
  };

  const onClickTrip = () => {
    gotToTripDetailsPage(history, id);
  };

  return (
    <div>
      <Button
        onClick={onClickTrip}
        width="auto"
        borderRightRadius="0"
        colorScheme="whiteAlpha"
      >
        <NamePlanet>{planet}: </NamePlanet>
        <NameTrip>{name}</NameTrip>
      </Button>
      <Button onClick={onClickDelete} borderLeftRadius="0" colorScheme="red">
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </div>
  );
}
