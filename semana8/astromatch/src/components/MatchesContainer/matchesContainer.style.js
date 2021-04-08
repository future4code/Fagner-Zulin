import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    margin-top: 10px;
    font-weight: bold;
    font-family: "Kiwi Maru", serif;
  }
`;

export const Container = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(247, 250, 252, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(203, 213, 224, 0.6);
    border-radius: 20px;
    margin: 0 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cbd5e0;
    border-radius: 20px;
  }
`;
