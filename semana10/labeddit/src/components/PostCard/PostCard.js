import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import {
  ContainerCard,
  FooterCard,
  HeaderCard,
  LabelCard,
  TextCard,
  Count,
} from './postCard.styled';

const text =
  'Dennis Herszkowicz, presidente da TOTVS, é um dos precursores da tecnologia do país. Aos 26 anos, em 1999, em uma época de conexão de internet dial-up repleta de ruídos, ele fundou a Gilbratar, uma pl... \nAs ações das empresas de tecnologia, principalmente nos EUA, estão muito valorizadas e alguns analistas questionam se estamos diante de uma bolha. Qual é a opinião do sr.?\nEu fundei a Gibraltar, uma e... \n\nLeia mais em: https://veja.abril.com.br/economia/com-mais-empresas-de-tech-listadas-todos-saem-ganhando-diz-ceo-da-totvs/\nLeia mais em: https://veja.abril.com.br/economia/com-mais-empresas-de-tech-listadas-todos-saem-ganhando-diz-ceo-da-totvs/';
export default function PostCard() {
  return (
    <ContainerCard>
      <HeaderCard>
        <LabelCard>Postado por:</LabelCard>
        <span>Fagner</span>
      </HeaderCard>

      <TextCard>{text}</TextCard>

      <FooterCard>
        <div>
          <Button size="xs" colorScheme="green">
            <TriangleUpIcon />
          </Button>
          <Count>10</Count>
          <Button size="xs" colorScheme="red">
            <TriangleDownIcon />
          </Button>
        </div>

        <div>
          <Count>20</Count>
          <span>Comentários</span>
        </div>
      </FooterCard>
    </ContainerCard>
  );
}
