import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import styled from 'styled-components';
import Routers from './routers/Routers';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Routers />
      <StarfieldAnimation
        alphaFactor="0.3"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </Container>
  );
}
