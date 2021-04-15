import styled from 'styled-components';

export const ContainerListTrips = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
`;

export const MenuContainer = styled.nav`
  background-color: rgba(45, 52, 54, 0.5);
  height: 70vh;
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const CardsContainer = styled.section`
  height: 70vh;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
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
