import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import palette from '../../constants/paletteColors';
import { ContainerFormSingUp, SubTitle } from './signUpModal.styled';
import useForm from '../../hooks/useForm';
import signUp from '../../services/signUp';
import { alertError, signUpSucess } from '../../utils/toastsFunctions';
import { saveToken } from '../../utils/localStorageFunctions';
import { gotToFeedPage } from '../../routers/coordinate';

const initialValue = {
  email: '',
  password: '',
  username: '',
};

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');
  const [form, onChange] = useForm(initialValue);
  const toast = useToast();
  const history = useHistory();

  const onClickSignUp = async () => {
    window.event.preventDefault();

    const body = { ...form };

    const result = await signUp(body);

    if (result.status) {
      saveToken(result.token);
      gotToFeedPage(history);
      signUpSucess(toast, result.username);
    } else {
      alertError(toast, result.message);
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="cyan">
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={isMobile ? '90vw' : '448px'} bg={palette.lightBlue}>
          <ModalHeader>
            <SubTitle>Cadastre-se</SubTitle>
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContainerFormSingUp onSubmit={onClickSignUp}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome de usuário</FormLabel>
                <Input
                  value={form.username}
                  onChange={onChange}
                  name="username"
                  type="text"
                />
              </FormControl>

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
              <Divider />
              <ModalFooter>
                <Button type="submit" colorScheme="green">
                  Cadastrar
                </Button>
                <Button colorScheme="gray" ml={3} onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ContainerFormSingUp>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
