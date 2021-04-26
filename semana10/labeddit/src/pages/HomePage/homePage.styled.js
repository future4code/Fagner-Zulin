import styled from 'styled-components';
import fontsFamily from '../../constants/fontFamily';

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-evenly;
`;

export const Text = styled.p`
  font-size: 1.5em;
  font-family: ${fontsFamily.text};
  font-style: italic;
`;
