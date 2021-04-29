import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { gotToPostPage } from '../../routers/coordinate';
import {
  ContainerCard,
  FooterCard,
  HeaderCard,
  LabelCard,
  TextCard,
  Count,
  TitleCard,
} from '../StyledComponents/Card';
import tweet from '../../utils/tweetFunction';

export default function PostCard({ info, votePositive, voteNegative }) {
  const {
    username,
    text,
    votesCount,
    commentsCount,
    title,
    userVoteDirection,
    id,
  } = info;
  const history = useHistory();

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
        <LabelCard>Postado por:</LabelCard>
        <span>{username}</span>
      </HeaderCard>

      <TextCard
        onClick={() => {
          gotToPostPage(history, id);
        }}
      >
        <TitleCard>{title}</TitleCard>
        {text}
      </TextCard>

      <FooterCard>
        <div>
          <Button
            onClick={() => votePositive(userVoteDirection, votesCount, id)}
            size="xs"
            colorScheme="green"
          >
            <TriangleUpIcon />
          </Button>
          <Count bc={changeColorCount}>{votesCount}</Count>
          <Button
            onClick={() => voteNegative(userVoteDirection, votesCount, id)}
            size="xs"
            colorScheme="red"
          >
            <TriangleDownIcon />
          </Button>
        </div>

        <div>
          <Button
            leftIcon={<FaTwitter />}
            onClick={() => tweet(title)}
            colorScheme="twitter"
          >
            Tweetar
          </Button>

          <Count>{commentsCount}</Count>
          <span>Comentários</span>
        </div>
      </FooterCard>
    </ContainerCard>
  );
}
