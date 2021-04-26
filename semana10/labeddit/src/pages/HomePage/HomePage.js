import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import Title from '../../components/StyledComponents/Title';
import { gotToLoginPage } from '../../routers/coordinate';
import { ContainerHome, Text } from './homePage.styled';

export default function HomePage() {
  const history = useHistory();
  return (
    <ContainerPage>
      <ContainerHome>
        <Title>LabEddit</Title>
        <Text>Fale sobre o que você quiser com o mundo!</Text>
        <Button onClick={() => gotToLoginPage(history)} colorScheme="cyan">
          Clique aqui para começar
        </Button>
      </ContainerHome>
    </ContainerPage>
  );
}
