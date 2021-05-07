import styled from 'styled-components';
import palette from '../../constants/paletteColors';

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  justify-content: space-evenly;
  @media (max-width: 575.98px) {
    width: 90vw;
    min-height: 100vh;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  width: 30vw;
  border: 2px solid ${palette.lightBlue};
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 575.98px) {
    width: 90vw;
    min-height: 300px;
  }
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
  width: 15vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 575.98px) {
    width: 60vw;
    min-height: 120px;
  }
`;

export const TextSignUp = styled.p`
  font-weight: bold;
  color: white;
  text-align: center;
`;
