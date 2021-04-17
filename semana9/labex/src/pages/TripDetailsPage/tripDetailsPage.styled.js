import styled from 'styled-components';

export const ContainerTripDetailsPage = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
`;

export const TripDetailsContainer = styled.article`
  width: 100%;
  background-color: rgba(247, 250, 252, 0.2);
  padding: 10px;
  border-radius: 10px;
  text-align: justify;

  p {
    margin: 10px 0;
  }
`;

export const TitlePlanet = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

export const Label = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;

export const ApplicationsContainer = styled.section`
  height: 70vh;
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

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

export const CandidatesContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
