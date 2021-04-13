import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  justify-content: space-between;
`;
const Logo = styled.img`
  max-height: 100px;
`;

const PlanetsContainer = styled.div``;

const SocialNetworkContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icones {
    font-size: 1.5em;
    cursor: pointer;
  }
  .icones:hover {
    color: #7f8c8d;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo src={labexWhite} alt="LabeX" />
      <PlanetsContainer>
        <ul>
          <li>Mercúrio</li>
          <li>Vênus</li>
          <li>Marte</li>
          <li>Júpiter</li>
        </ul>
      </PlanetsContainer>
      <PlanetsContainer>
        <ul>
          <li>Saturno</li>
          <li>Urano</li>
          <li>Netuno</li>
          <li>Plutão</li>
        </ul>
      </PlanetsContainer>
      <SocialNetworkContainer>
        <FontAwesomeIcon className="icones" icon={faFacebookSquare} />
        <FontAwesomeIcon className="icones" icon={faTwitterSquare} />
        <FontAwesomeIcon className="icones" icon={faInstagramSquare} />
      </SocialNetworkContainer>
    </FooterContainer>
  );
}
