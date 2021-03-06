import styled from 'styled-components';

const MenuContainer = styled.nav`
  background-color: rgba(45, 52, 54, 0.5);
  height: 70vh;
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  justify-content: ${(props) => props.jc || ''};
  @media (max-width: 992px) {
    width: 30vw;
  }
`;

export default MenuContainer;
