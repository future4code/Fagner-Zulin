import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import styled from 'styled-components';
import Routers from './routers/Routers';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Routers />
      <StarfieldAnimation
        style={{
          width: '100%',
          height: '94%',
        }}
      />
    </Container>
  );
}
