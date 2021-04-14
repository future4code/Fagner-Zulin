import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import {
  ContainerLogin,
  FormLoginContainer,
  TitleLogin,
} from './loginPage.styled';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerLogin>
          <FormLoginContainer>
            <TitleLogin>Login</TitleLogin>
            <Input mb="1.5" placeholder="Digite seu e-mail" />
            <InputGroup mb="1.5" size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Digite sua senha"
              />
              <InputRightElement width="4.5rem">
                <CustomButton mr="-30px" padding="3px" onClick={handleClick}>
                  {show ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </CustomButton>
              </InputRightElement>
            </InputGroup>
            <CustomButton>Entrar</CustomButton>
          </FormLoginContainer>
        </ContainerLogin>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
