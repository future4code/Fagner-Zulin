import { Divider, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fadeIn, zoomIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import curiosities from '../../resources/curiosities';

const fadeInAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;

const AnimateDiv = styled.div`
  text-align: justify;
  font-style: italic;
  animation: 5s ${fadeInAnimation};
`;

const AnimateTitle = styled.h1`
  font-size: 1.8em;
  text-align: center;
  animation: 1s ${zoomInAnimation};
`;

const AnimationContainer = styled.div`
  min-height: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function CuriositiesAnimation() {
  const [text, setText] = useState('');
  useEffect(() => {
    let value = 1;
    const interval = setInterval(() => {
      setText(<AnimateDiv key={value}>{curiosities[value]}</AnimateDiv>);
      if (value === 16) {
        value = 1;
      } else {
        value += 1;
      }
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContainer>
      {!text && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.500"
          size="xl"
        />
      )}
      {text && (
        <AnimateTitle>
          Curiosidades
          <Divider />
        </AnimateTitle>
      )}
      {text}
    </AnimationContainer>
  );
}
