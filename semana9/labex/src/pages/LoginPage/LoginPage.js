import React, { useEffect, useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
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
import login from '../../services/login';
import { hasToken, saveToken } from '../../utils/localStorageFunctions';
import { gotToAdminHomePage } from '../../routers/coordinates';
import PlanetsImages from '../../components/PlanetsImages/PlanetsImages';
import SubmitButton from '../../components/StyledComponentes/SubmitButton';
import { emailRegex } from '../../validations/regex';
import useForm from '../../hooks/useForm';

const initialStateValue = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [form, onChange, clearForm] = useForm(initialStateValue);
  const history = useHistory();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    const result = hasToken();

    if (result) {
      gotToAdminHomePage(history);
    }
  }, []);

  const alertLogin = () =>
    toast({
      title: 'Erro ao entrar',
      description: 'Usuário não encontrado, por favor tente novamente',
      status: 'error',
      duration: 6000,
      isClosable: true,
    });

  const onClickLogin = async () => {
    window.event.preventDefault();
    const body = { ...form };
    const result = await login(body);

    if (result.code === 401) {
      alertLogin();
      clearForm(initialStateValue);
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
          <PlanetsImages />
          <FormLoginContainer onSubmit={onClickLogin}>
            <TitleLogin>Login</TitleLogin>
            <Input
              name="email"
              pattern={emailRegex}
              title="Ex: seu-email@provedor.com"
              required
              type="email"
              onChange={onChange}
              value={form.email}
              mb="1.5"
              placeholder="Digite seu e-mail"
            />
            <InputGroup mb="1.5" size="md">
              <Input
                name="password"
                required
                onChange={onChange}
                value={form.password}
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
            <SubmitButton type="submit">Entrar</SubmitButton>
          </FormLoginContainer>
        </ContainerLogin>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
