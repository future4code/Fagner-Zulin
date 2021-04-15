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
            <h1>Netuno</h1>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody pb={6}>
            <form>
              <Input />
              <Input />
              <Input />
              <Select placeholder="Selecione seu país">
                {countries.map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </Select>
              <Textarea placeholder="Here is a sample placeholder" />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
