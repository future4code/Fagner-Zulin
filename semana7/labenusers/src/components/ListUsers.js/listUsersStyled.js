import styled from "styled-components";

export const UserLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;

  p {
    cursor: pointer;
  }
`;

export const ButtonClose = styled.div`
  background-color: white;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #7f8c8d;

  button {
    margin-bottom: 20px;
  }
`;
