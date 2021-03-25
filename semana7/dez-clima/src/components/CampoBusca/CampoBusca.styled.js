import styled from "styled-components";

export const ContainerBusca = styled.div`
  background-color: #7ea5d9;
  width: 50vw;
  height: 12vh;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputBusca = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #5377a6;
  outline: none;
  margin-right: 10px;
  height: 2em;
  padding: 2px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ButtonBuscar = styled.button`
  height: 2em;
`;

export const ContainerDadosCidade = styled.div`
  margin-top: 10px;

  p {
    font-weight: bold;
    font-size: 0.9em;
    color: white;
  }
`;
