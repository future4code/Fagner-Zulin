import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #333333;
  width: 50%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px black;
  margin: 50px 0;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const InputNome = styled.input`
  height: 2em;
  width: 90%;
  padding: 5px;
  outline: none;
  border-radius: 10px;
`;

export const Mensagem = styled.p`
  text-align: center;
  font-weight: 700;
`;
