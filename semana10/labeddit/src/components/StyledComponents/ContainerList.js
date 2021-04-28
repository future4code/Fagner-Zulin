import styled from 'styled-components';
import palette from '../../constants/paletteColors';

const ContainerList = styled.section`
  height: 90vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(247, 250, 252, 0.5);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${palette.blue};
    border-radius: 20px;
    margin: 0 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${palette.darkBlue};
    border-radius: 20px;
  }
`;

export default ContainerList;
