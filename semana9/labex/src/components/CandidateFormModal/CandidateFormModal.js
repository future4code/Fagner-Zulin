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
} from '@chakra-ui/react';
import CustomButton from '../StyledComponentes/CustomButton';
import getCoutries from '../../services/getCoutries';
import { SubTitle, Title, FormCandidate } from './candidateFormModal.styled';
import SubmitButton from '../StyledComponentes/SubmitButton';

export default function CandidateFormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getCoutries();
      setCountries(result);
    })();
  }, []);

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
            <Title>Netuno </Title>
            <SubTitle>Surfando em Netuno</SubTitle>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody pb={6}>
            <FormCandidate>
              <Input bg="whiteAlpha.700" placeholder="Nome" />
              <Input bg="whiteAlpha.700" placeholder="Profissão" />
              <Input bg="whiteAlpha.700" placeholder="Idade" />
              <Select bg="whiteAlpha.700" placeholder="Selecione seu País">
                {countries.map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </Select>
              <Textarea bg="whiteAlpha.700" placeholder="Texto de Candiatura" />
              <ModalFooter>
                <SubmitButton mr="10px">Candidatar-se</SubmitButton>
                <Button colorScheme="red" onClick={onClose}>
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
