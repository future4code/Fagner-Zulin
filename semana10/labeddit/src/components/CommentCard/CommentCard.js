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

export default function CommentCard({
  info,
  voteNegativeComment,
  votePositiveComment,
}) {
  const { votesCount, text, username, userVoteDirection, id } = info;

  const changeColorCount = () => {
    if (userVoteDirection === 1) {
      return '#38A169';
    }

    if (userVoteDirection === -1) {
      return '#E53E3E';
    }

    return '';
  };

  return (
    <ContainerCard>
      <HeaderCard>
        <LabelCard>Comentário de:</LabelCard>
        <span>{username}</span>
      </HeaderCard>
      <TextCard>{text}</TextCard>
      <FooterCard>
        <div>
          <Button
            onClick={() =>
              votePositiveComment(userVoteDirection, votesCount, id)
            }
            size="xs"
            colorScheme="green"
          >
            <TriangleUpIcon />
          </Button>
          <Count bc={changeColorCount}>{votesCount}</Count>
          <Button
            onClick={() =>
              voteNegativeComment(userVoteDirection, votesCount, id)
            }
            size="xs"
            colorScheme="red"
          >
            <TriangleDownIcon />
          </Button>
        </div>
      </FooterCard>
    </ContainerCard>
  );
}
