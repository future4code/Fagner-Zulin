import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import Title from '../../components/StyledComponents/Title';
import {
  ContainerForm,
  ContainerSection,
  ContainerSignUp,
  SubTitle,
  TextSignUp,
} from './loginPage.styled';

export default function LoginPage() {
  return (
    <ContainerPage>
      <ContainerSection>
        <Title>LabEddit</Title>
        <ContainerForm>
          <SubTitle>Login</SubTitle>
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

        <ContainerSignUp>
          <TextSignUp>É novo aqui?</TextSignUp>
          <TextSignUp>Faça já seu cadastro</TextSignUp>
          <Button colorScheme="cyan">Sign Up</Button>
        </ContainerSignUp>
      </ContainerSection>
    </ContainerPage>
  );
}
