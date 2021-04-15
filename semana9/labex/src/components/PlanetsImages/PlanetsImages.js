import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import planetsObject from '../../utils/planetsObject';

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function PlanetsImages() {
  const planetsArray = [
    <Image maxWidth="100%" src={planetsObject[1]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[2]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[3]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[4]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[5]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[6]} alt="" />,
    <Image maxWidth="100%" src={planetsObject[7]} alt="" />,
  ];

  return (
    <ImageContainer>
      <Box width="100%">
        <AliceCarousel
          infinite
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={3000}
          animationType="fadeout"
          autoPlay
          items={planetsArray}
        />
      </Box>
    </ImageContainer>
  );
}
