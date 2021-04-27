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
  TitleCard,
} from './postCard.styled';

export default function PostCard({ info }) {
  const { username, text, votesCount, commentsCount, title } = info;
  return (
    <ContainerCard>
      <HeaderCard>
        <LabelCard>Postado por:</LabelCard>
        <span>{username}</span>
      </HeaderCard>

      <TextCard>
        <TitleCard>{title}</TitleCard>
        {text}
      </TextCard>

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

        <div>
          <Count>{commentsCount}</Count>
          <span>Comentários</span>
        </div>
      </FooterCard>
    </ContainerCard>
  );
}
