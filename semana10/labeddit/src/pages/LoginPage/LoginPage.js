import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import Title from '../../components/StyledComponents/Title';
import { ContainerForm, ContainerSection } from './loginPage.styled';

export default function LoginPage() {
  return (
    <ContainerPage>
      <ContainerSection>
        <Title>LabEddit</Title>
        <ContainerForm>
          <h1>Login</h1>
          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button colorScheme="red" type="submit">
            Entrar
          </Button>
        </ContainerForm>
      </ContainerSection>
    </ContainerPage>
  );
}
