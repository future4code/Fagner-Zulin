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
  FormControl,
  FormLabel,
  Input,
  useMediaQuery,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import ContainerFormNewPost from './newPostModal.styled';
import useForm from '../../hooks/useForm';
import palette from '../../constants/paletteColors';
import createPost from '../../services/createPost';
import { genericError, createPostSucess } from '../../utils/toastsFunctions';

const initialValue = {
  title: '',
  text: '',
};

export default function NewPostModal({ isToUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, onChange, clearForm] = useForm(initialValue);
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');
  const toast = useToast();

  const onClickCreatePost = async () => {
    window.event.preventDefault();

    const body = { ...form };

    const result = await createPost(body);

    if (result.status) {
      createPostSucess(toast);
      isToUpdate(true);
    } else {
      genericError(toast);
    }
    clearForm(initialValue);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="cyan">
        Criar um novo post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={palette.lightBlue} maxW={isMobile ? '90vw' : '448px'}>
          <ModalHeader>Novo Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContainerFormNewPost onSubmit={onClickCreatePost}>
              <FormControl id="title" isRequired>
                <FormLabel>Título</FormLabel>
                <Input
                  value={form.title}
                  onChange={onChange}
                  name="title"
                  type="text"
                />
              </FormControl>

              <FormControl id="text" isRequired>
                <FormLabel>Conteúdo</FormLabel>
                <Textarea
                  value={form.text}
                  onChange={onChange}
                  name="text"
                  type="text"
                />
              </FormControl>
              <ModalFooter>
                <Button type="submit" colorScheme="green">
                  Postar
                </Button>
                <Button colorScheme="gray" ml={3} onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ContainerFormNewPost>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
