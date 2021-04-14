import styled from 'styled-components';

const CustomButton = styled.span`
  color: black;
  font-weight: bold;
  background: #f1f2f6;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: #979797;
    transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
      background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  }

  :active {
    transform: scale(0.98);
  }
`;

export default CustomButton;
