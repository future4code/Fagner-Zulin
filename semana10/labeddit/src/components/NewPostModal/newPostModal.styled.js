import styled from 'styled-components';

const ContainerFormNewPost = styled.form`
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 575.98px) {
    height: 40vh;
  }
`;

export default ContainerFormNewPost;
