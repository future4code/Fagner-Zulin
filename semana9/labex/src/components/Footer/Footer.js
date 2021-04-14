import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import labexWhite from '../../img/LabeX-white.png';
import CustomButton from '../StyledComponentes/CustomButton';
import {
  FooterContainer,
  Logo,
  PlanetsContainer,
  SocialNetworkContainer,
} from './footer.styled';

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
      <CustomButton>Área Administrativa</CustomButton>
    </FooterContainer>
  );
}
