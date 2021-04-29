import styled from 'styled-components';
import palette from '../../constants/paletteColors';

export const ContainerCard = styled.article`
  background-color: ${palette.lightBlue};
  width: 45vw;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (max-width: 575.98px) {
    width: 93vw;
  }
`;

export const HeaderCard = styled.div`
  background-color: ${palette.blue};
  color: white;
  padding: 10px 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const LabelCard = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const TextCard = styled.div`
  padding: 10px 5px;
  text-align: justify;
  border-left: 1px solid ${palette.blue};
  border-right: 1px solid ${palette.blue};
  cursor: pointer;
`;

export const TitleCard = styled.h2`
  font-weight: bold;
  text-align: center;
`;

export const FooterCard = styled.div`
  background-color: ${palette.blue};
  color: white;
  padding: 10px 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 575.98px) {
    padding: 10 0;
  }
`;

export const Count = styled.span`
  font-weight: 600;
  margin: 0 3px;
  padding: 3px;
  border-radius: 10px;
  background-color: ${(props) => props.bc || ''};
`;
