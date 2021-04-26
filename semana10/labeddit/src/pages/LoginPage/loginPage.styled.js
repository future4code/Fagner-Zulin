import styled from 'styled-components';
import palette from '../../constants/paletteColors';

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  justify-content: space-evenly;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  border: 2px solid ${palette.lightBlue};
  padding: 10px;
  border-radius: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 1.6em;
  font-weight: bold;
`;

export const ContainerSignUp = styled.div`
  background-color: ${palette.blue};
  padding: 10px;
  border-radius: 10px;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextSignUp = styled.p`
  font-weight: bold;
  color: white;
  text-align: center;
`;
