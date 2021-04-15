import React, { useEffect, useState } from 'react';
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
  Input,
  Textarea,
  Select,
  useToast,
} from '@chakra-ui/react';
import CustomButton from '../StyledComponentes/CustomButton';
import getCoutries from '../../services/getCoutries';
import { SubTitle, Title, FormCandidate } from './candidateFormModal.styled';
import SubmitButton from '../StyledComponentes/SubmitButton';
import useForm from '../../hooks/useForm';
import { nameCandidateRegex, professionRegex } from '../../validations/regex';
import applyToTrip from '../../services/applyToTrip';

const initialStateValue = {
  name: '',
  age: '',
  applicationText: '',
  profession: '',
  country: '',
};

export default function CandidateFormModal({ toApplyData }) {
  const { name, planet, id } = toApplyData;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countries, setCountries] = useState([]);
  const [form, onChange, clearForm] = useForm(initialStateValue);
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const result = await getCoutries();
      setCountries(result);
    })();
  }, []);

  const alertApply = () =>
    toast({
      title: 'Candidatura feita',
      description: 'Tudo pronto, logo entraremos em contato com a resposta',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });

  const onClickApply = async () => {
    window.event.preventDefault();
    const body = { ...form };
    const result = await applyToTrip(id, body);

    if (result.code === 200) {
      alertApply();
      clearForm(initialStateValue);
      onClose();
    }
  };

  return (
    <>
      <CustomButton onClick={onOpen}>Candidatar-se</CustomButton>

      <Modal
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent background="rgba(189, 195, 199, 0.95)">
          <ModalHeader>
            <Title>{planet}</Title>
            <SubTitle>{name}</SubTitle>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody pb={6}>
            <FormCandidate onSubmit={onClickApply}>
              <Input
                pattern={nameCandidateRegex}
                title="O nome precisa ter 3 caracteres ou mais"
                onChange={onChange}
                value={form.name}
                name="name"
                type="text"
                required
                bg="whiteAlpha.700"
                placeholder="Nome"
              />
              <Input
                pattern={professionRegex}
                title="A profissão precisa ter 10 caracteres ou mais"
                onChange={onChange}
                value={form.profession}
                name="profession"
                type="text"
                required
                bg="whiteAlpha.700"
                placeholder="Profissão"
              />
              <Input
                onChange={onChange}
                value={form.age}
                name="age"
                type="number"
                required
                bg="whiteAlpha.700"
                placeholder="Idade"
                min={18}
              />
              <Select
                onChange={onChange}
                value={form.country}
                name="country"
                required
                bg="whiteAlpha.700"
                placeholder="Selecione seu País"
              >
                {countries.map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </Select>
              <Textarea
                onChange={onChange}
                value={form.applicationText}
                name="applicationText"
                bg="whiteAlpha.700"
                required
                placeholder="Texto de Candiatura"
              />
              <ModalFooter>
                <SubmitButton type="submit" mr="10px">
                  Candidatar-se
                </SubmitButton>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onClose();
                    clearForm(initialStateValue);
                  }}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </FormCandidate>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
