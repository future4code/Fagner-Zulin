import styled from 'styled-components';

const PageContainer = styled.main`
  min-height: 100vh;
  width: 75vw;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.background};

  @media (max-width: 992px) {
    width: 90vw;
  }
`;
export default PageContainer;
