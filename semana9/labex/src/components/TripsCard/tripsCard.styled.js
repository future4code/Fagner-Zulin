import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 160px;
  width: 300px;
  background-color: #95a5a6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;
export const DescriptionContainer = styled.div`
  background-color: #7f8c8d;
  padding: 5px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const DescriptionLabel = styled.p`
  color: #000;
  display: inline;
  font-weight: bold;
`;

export const NamePlanet = styled.h1`
  font-size: 1.6em;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
`;
