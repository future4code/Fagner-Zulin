import React from "react";
import styled from "styled-components";
import ChoiseContainer from "./components/ChoiseContainer/ChoiseContainer";
import { ChakraProvider } from "@chakra-ui/react";
const Container = styled.div`
  background-color: #fecfbb;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <ChakraProvider>
      <Container>
        <ChoiseContainer />
      </Container>
    </ChakraProvider>
  );
}
