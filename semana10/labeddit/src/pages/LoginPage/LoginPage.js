import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import Title from '../../components/StyledComponents/Title';
import {
  ContainerForm,
  ContainerSection,
  ContainerSignUp,
  SubTitle,
  TextSignUp,
} from './loginPage.styled';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import useForm from '../../hooks/useForm';
import login from '../../services/login';
import { saveToken } from '../../utils/localStorageFunctions';
import { gotToFeedPage } from '../../routers/coordinate';

const initialValue = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [form, onChange, clearForm] = useForm(initialValue);
  const toast = useToast();
  const history = useHistory();

  const loginSucess = (user) => {
    toast({
      title: 'Login feito com sucesso',
      description: `Seja bem-vindo ${user}`,
      status: 'success',
      duration: 6000,
      isClosable: true,
    });
  };

  const loginError = (message) => {
    toast({
      title: 'Algo deu errado!',
      description: message,
      status: 'error',
      duration: 6000,
      isClosable: true,
    });
  };

  const onClickLogin = async () => {
    window.event.preventDefault();
    const body = { ...form };

    const result = await login(body);

    if (result.status) {
      saveToken(result.token);
      gotToFeedPage(history);
      loginSucess(result.username);
    } else {
      loginError(result.message);
    }

    clearForm(initialValue);
  };

  return (
    <ContainerPage>
      <ContainerSection>
        <Title>LabEddit</Title>
        <ContainerForm onSubmit={onClickLogin}>
          <SubTitle>Login</SubTitle>
          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              value={form.email}
              onChange={onChange}
              name="email"
              type="email"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              value={form.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </FormControl>

          <Button colorScheme="red" type="submit">
            Entrar
          </Button>
        </ContainerForm>

        <ContainerSignUp>
          <TextSignUp>É novo aqui?</TextSignUp>
          <TextSignUp>Faça já seu cadastro</TextSignUp>
          <SignUpModal />
        </ContainerSignUp>
      </ContainerSection>
    </ContainerPage>
  );
}
