import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import ChooseContainer from "./components/ChooseContainer/ChooseContainer";

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
        <ChooseContainer />
      </Container>
    </ChakraProvider>
  );
}
