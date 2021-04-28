import { Button } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import React from 'react';
import {
  ContainerCard,
  Count,
  FooterCard,
  HeaderCard,
  LabelCard,
  TextCard,
} from '../StyledComponents/Card';

export default function CommentCard({ info }) {
  const { votesCount, text, username } = info;
  return (
    <ContainerCard>
      <HeaderCard>
        <LabelCard>Comentário de:</LabelCard>
        <span>{username}</span>
      </HeaderCard>
      <TextCard>{text}</TextCard>
      <FooterCard>
        <div>
          <Button size="xs" colorScheme="green">
            <TriangleUpIcon />
          </Button>
          <Count>{votesCount}</Count>
          <Button size="xs" colorScheme="red">
            <TriangleDownIcon />
          </Button>
        </div>
      </FooterCard>
    </ContainerCard>
  );
}
