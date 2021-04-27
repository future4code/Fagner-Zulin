import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import Title from '../../components/StyledComponents/Title';
import { gotToFeedPage, gotToLoginPage } from '../../routers/coordinate';
import { ContainerHome, Text } from './homePage.styled';
import { hasToken } from '../../utils/localStorageFunctions';

export default function HomePage() {
  const history = useHistory();
  const [hasTokenValue, setHasTokenValue] = useState(false);

  useEffect(() => {
    setHasTokenValue(hasToken());
  }, []);

  return (
    <ContainerPage>
      <ContainerHome>
        <Title>LabEddit</Title>
        <Text>Fale sobre o que você quiser com o mundo!</Text>
        <Button
          onClick={() =>
            hasTokenValue ? gotToFeedPage(history) : gotToLoginPage(history)
          }
          colorScheme="cyan"
        >
          Clique aqui para começar
        </Button>
      </ContainerHome>
    </ContainerPage>
  );
}
