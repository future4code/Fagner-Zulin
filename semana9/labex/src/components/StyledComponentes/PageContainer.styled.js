import styled from 'styled-components';

const PageContainer = styled.main`
  min-height: 100vh;
  width: 75vw;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.background};
`;
export default PageContainer;
