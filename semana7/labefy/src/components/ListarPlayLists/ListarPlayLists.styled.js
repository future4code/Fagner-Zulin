import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    margin-bottom: 5px;
  }
`;

export const LinhaPlayList = styled.div`
  width: 90%;
  background-color: #35203b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;

  .icone {
    margin-right: 10px;
  }
`;
