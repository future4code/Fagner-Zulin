import styled from "styled-components";

export const ContainerMusicas = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .player {
    max-width: 80%;
  }

  @media (max-width: 400px) {
    .player {
      max-height: 40%;
      max-width: 100%;
    }
  }
`;

export const InputRange = styled.input`
  width: 80%;
  -webkit-appearance: none;
  height: 30px;
  background: #35203b;
  outline: none;
  border-radius: 15px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #cf4a30;
    cursor: pointer;
    border-radius: 100%;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #cf4a30;
    cursor: pointer;
    border-radius: 100%;
  }
`;
