import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import vote from '../../services/vote';
import {
  ContainerCard,
  FooterCard,
  HeaderCard,
  LabelCard,
  TextCard,
  Count,
  TitleCard,
} from './postCard.styled';

export default function PostCard({ info, postVote }) {
  const {
    username,
    text,
    votesCount,
    commentsCount,
    title,
    userVoteDirection,
    id,
  } = info;

  const votePositive = async () => {
    if (userVoteDirection === 0) {
      const currVote = votesCount + 1;

      postVote((post) => {
        if (post.id === id) {
          return {
            ...post,
            votesCount: currVote,
            userVoteDirection: 1,
          };
        }
        return post;
      });

      await vote(id, { direction: 1 });
    } else if (userVoteDirection === +1) {
      const currVote = votesCount - 1;
      postVote((post) => {
        if (post.id === id) {
          return {
            ...post,
            votesCount: currVote,
            userVoteDirection: 0,
          };
        }
        return post;
      });
      await vote(id, { direction: 0 });
    }
  };

  const voteNegative = async () => {
    if (userVoteDirection === 0) {
      const currVote = votesCount - 1;

      postVote((post) => {
        if (post.id === id) {
          return {
            ...post,
            votesCount: currVote,
            userVoteDirection: -1,
          };
        }
        return post;
      });

      await vote(id, { direction: -1 });
    } else if (userVoteDirection === -1) {
      const currVote = votesCount + 1;
      postVote((post) => {
        if (post.id === id) {
          return {
            ...post,
            votesCount: currVote,
            userVoteDirection: 0,
          };
        }
        return post;
      });
      await vote(id, { direction: 0 });
    }
  };

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

      <TextCard>
        <TitleCard>{title}</TitleCard>
        {text}
      </TextCard>

      <FooterCard>
        <div>
          <Button onClick={votePositive} size="xs" colorScheme="green">
            <TriangleUpIcon />
          </Button>
          <Count bc={changeColorCount}>{votesCount}</Count>
          <Button onClick={voteNegative} size="xs" colorScheme="red">
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
