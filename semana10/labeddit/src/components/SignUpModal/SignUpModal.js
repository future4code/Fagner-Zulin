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
} from '@chakra-ui/react';
import palette from '../../constants/paletteColors';
import { ContainerFormSingUp, SubTitle } from './signUpModal.styled';

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');

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
            <ContainerFormSingUp>
              <FormControl id="name" isRequired>
                <FormLabel>Nome de usuário</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <Divider />
              <ModalFooter>
                <Button colorScheme="green">Cadastrar</Button>
                <Button colorScheme="gray" ml={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ContainerFormSingUp>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
