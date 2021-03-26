import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Titulo = styled.h1`
  letter-spacing: 2px;
  font-size: ${(props) => props.tamanho};
  background: -webkit-linear-gradient(#ed8c2b, #cf4a30);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Botao = styled.button`
  font-size: ${(props) => props.tamanho};
  color: white;
  padding: 5px;
  background: -webkit-linear-gradient(#ed8c2b, #cf4a30);
  border: none;
  outline: none;
  cursor: pointer;

  :active {
    background: -webkit-linear-gradient(#cf4a30, #ed8c2b);
  }
`;

export const ContainerBotao = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;
