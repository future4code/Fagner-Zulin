import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import labexWhite from '../../img/LabeX-white.png';

const HeaderContainer = styled.header`
  height: 15vh;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 200px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <img src={labexWhite} alt="LabeX" />
    </HeaderContainer>
  );
}
