import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`;
export const Logo = styled.img`
  max-height: 120px;
`;

export const PlanetsContainer = styled.div`
  li {
    list-style: none;
    cursor: pointer;
    user-select: none;
  }

  li:hover {
    color: #979797;
    transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
      background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  }
`;

export const SocialNetworkContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icones {
    font-size: 1.5em;
    cursor: pointer;
  }
  .icones:hover {
    color: #979797;
    transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
      background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  }

  .icones:active {
    transform: scale(0.98);
  }
`;
