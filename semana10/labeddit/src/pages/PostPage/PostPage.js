import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Spinner,
  Textarea,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import ContainerList from '../../components/StyledComponents/ContainerList';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import getPostDetails from '../../services/getPostDetails';
import vote from '../../services/vote';
import { genericError } from '../../utils/toastsFunctions';
import { ContainerComments } from './postPage.styled';

export default function PostPage() {
  const toast = useToast();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');

  useEffect(() => {
    (async () => {
      const result = await getPostDetails(id);

      if (result.status) {
        setComments(result.comments);
        setPost(result.post);
      } else {
        genericError(toast);
      }
    })();
  }, []);

  const votePositive = async () => {
    if (post.userVoteDirection === 0) {
      const currVote = post.votesCount + 1;
      setPost({
        ...post,
        votesCount: currVote,
        userVoteDirection: 1,
      });
      await vote(post.id, { direction: 1 });
    } else if (post.userVoteDirection === +1) {
      const currVote = post.votesCount - 1;
      setPost({
        ...post,
        votesCount: currVote,
        userVoteDirection: 0,
      });
      await vote(post.id, { direction: 0 });
    }
  };

  const voteNegative = async () => {
    if (post.userVoteDirection === 0) {
      const currVote = post.votesCount - 1;
      setPost({
        ...post,
        votesCount: currVote,
        userVoteDirection: -1,
      });
      await vote(post.id, { direction: -1 });
    } else if (post.userVoteDirection === -1) {
      const currVote = post.votesCount + 1;
      setPost({
        ...post,
        votesCount: currVote,
        userVoteDirection: 0,
      });
      await vote(post.id, { direction: 0 });
    }
  };

  return (
    <ContainerPage>
      <Header />
      <ContainerList>
        {!post ? (
          <Spinner
            alignSelf="center"
            thickness="4px"
            speed="0.65s"
            emptyColor="blue.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <>
            <PostCard
              voteNegative={voteNegative}
              votePositive={votePositive}
              info={post}
            />
            <ContainerComments>
              <Accordion width={isMobile ? '90vw' : '45vw'} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <h2>Insira seu comentário</h2>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                  >
                    <Textarea placeholder="Digite aqui" />
                    <Button mt="3">Comentar</Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ContainerComments>
            {comments.length > 0 &&
              comments.map((comment) => (
                <CommentCard key={comment.id} info={comment} />
              ))}
          </>
        )}
      </ContainerList>
    </ContainerPage>
  );
}
