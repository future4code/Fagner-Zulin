import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import labexWhite from '../../img/LabeX-white.png';

const FooterContainer = styled.footer`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;
const Logo = styled.img`
  max-height: 100px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo src={labexWhite} alt="LabeX" />
    </FooterContainer>
  );
}
