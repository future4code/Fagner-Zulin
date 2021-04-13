import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';

const HomePageContainer = styled.main`
  height: 100vh;
  width: 70vw;
  position: relative;
  z-index: 1;
  background-color: #000;
`;

export default function HomePage() {
  return (
    <HomePageContainer>
      <Header />
    </HomePageContainer>
  );
}
