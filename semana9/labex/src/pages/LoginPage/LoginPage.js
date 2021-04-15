import React, { useState } from 'react';
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import {
  ContainerLogin,
  FormLoginContainer,
  ImageContainer,
  TitleLogin,
} from './loginPage.styled';
import login from '../../services/login';
import { saveToken } from '../../utils/localStorageFunctions';
import { gotToAdminHomePage } from '../../routers/coordinates';
import planetsObject from '../../utils/planetsObject';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function LoginPage() {
  const planetsArray = [
    <Image maxWidth="100%" src={planetsObject[1]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[2]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[3]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[4]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[5]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[6]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[7]} alt="" />,
  ];

  const history = useHistory();

  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setpassword(event.target.value);

  const cleanAllInputs = () => {
    setEmail('');
    setpassword('');
  };

  const alertLogin = () =>
    toast({
      title: 'Erro ao entrar',
      description: 'Usuário não encontrado, por favor tente novamente',
      status: 'error',
      duration: 6000,
      isClosable: true,
    });

  const onClickLogin = async () => {
    const body = { email, password };
    const result = await login(body);

    if (result.code === 401) {
      alertLogin();
      cleanAllInputs();
    } else {
      saveToken(result.token);
      gotToAdminHomePage(history);
    }
  };

  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerLogin>
          <ImageContainer>
            <Box width="100%">
              <AliceCarousel
                infinite
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                autoPlayInterval={3000}
                animationType="fadeout"
                autoPlay
                items={planetsArray}
              />
            </Box>
          </ImageContainer>
          <FormLoginContainer>
            <TitleLogin>Login</TitleLogin>
            <Input
              onChange={handleEmail}
              value={email}
              mb="1.5"
              placeholder="Digite seu e-mail"
            />
            <InputGroup mb="1.5" size="md">
              <Input
                onChange={handlePassword}
                value={password}
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
            <CustomButton onClick={onClickLogin}>Entrar</CustomButton>
          </FormLoginContainer>
        </ContainerLogin>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
