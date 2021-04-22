import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Select,
  Textarea,
  Divider,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import CustomButton from '../StyledComponentes/CustomButton';
import SubmitButton from '../StyledComponentes/SubmitButton';
import FormContainer from '../StyledComponentes/FormContainer';
import planetsNames from '../../resources/planetsName';
import { nameTripRegex } from '../../validations/regex';
import currentDate from '../../utils/currentDate';
import useForm from '../../hooks/useForm';
import createTrip from '../../services/createTrip';

const initialStateValue = {
  name: '',
  planet: '',
  date: '',
  description: '',
  durationInDays: '',
};

export default function CreateTripsModal({ whenCreate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, onChange, clearForm] = useForm(initialStateValue);
  const toast = useToast();
  const alertCreated = () =>
    toast({
      title: 'Viagem criada!',
      description: 'Agora é só começar os preparativos!',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

  const onClickCreate = async () => {
    window.event.preventDefault();
    const body = { ...form };
    const result = await createTrip(body);

    if (result.code === 200) {
      clearForm(initialStateValue);
      whenCreate();
      alertCreated();
      onClose();
    }
  };

  return (
    <>
      <CustomButton onClick={onOpen} mg="10px 0" wd="100%">
        Nova Viagem
      </CustomButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="rgba(189, 195, 199, 0.95)">
          <ModalHeader>
            <h1>Crie uma nova viagem</h1>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody pb={6}>
            <FormContainer onSubmit={onClickCreate}>
              <Input
                onChange={onChange}
                value={form.name}
                pattern={nameTripRegex}
                title="O nome precisa ter 5 caracteres ou mais"
                name="name"
                type="text"
                required
                bg="whiteAlpha.700"
                placeholder="Nome do evento"
              />
              <Select
                onChange={onChange}
                value={form.planet}
                name="planet"
                required
                bg="whiteAlpha.700"
                placeholder="Escolha o planeta"
              >
                {planetsNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
              <div>
                <FormLabel>Escolha a data</FormLabel>
                <Input
                  onChange={onChange}
                  value={form.date}
                  name="date"
                  min={currentDate()}
                  required
                  bg="whiteAlpha.700"
                  type="date"
                />
              </div>
              <Input
                onChange={onChange}
                value={form.durationInDays}
                name="durationInDays"
                type="number"
                min="50"
                required
                bg="whiteAlpha.700"
                placeholder="Duração da viagem (em dias)"
              />

              <Textarea
                onChange={onChange}
                value={form.description}
                name="description"
                required
                bg="whiteAlpha.700"
                placeholder="Insira a descrição do evento"
              />
              <ModalFooter>
                <SubmitButton type="submit" mr="10px">
                  Criar
                </SubmitButton>
                <Button colorScheme="red">Cancelar</Button>
              </ModalFooter>
            </FormContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
