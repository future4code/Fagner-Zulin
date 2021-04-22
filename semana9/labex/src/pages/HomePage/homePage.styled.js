import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 40%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const VideoContainer = styled.div`
  width: 60%;
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const Videos = styled.video`
  max-width: 100%;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 15px;
  padding: 0 40px;
  word-break: break-word;
`;
