import styled from 'styled-components';
import fontsFamily from '../../constants/fontFamily';
import palette from '../../constants/paletteColors';

const Title = styled.h1`
  font-size: ${(props) => props.fs || '3em'};
  font-family: ${fontsFamily.name};
  background-color: ${palette.orange};
  padding: 5px 10px;
`;

export default Title;
