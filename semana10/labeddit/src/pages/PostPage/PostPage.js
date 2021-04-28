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
import { useHistory, useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import ContainerList from '../../components/StyledComponents/ContainerList';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import palette from '../../constants/paletteColors';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage ';
import createComment from '../../services/createComment';
import getPostDetails from '../../services/getPostDetails';
import vote from '../../services/vote';
import voteComment from '../../services/voteComment';
import { genericError, createCommentSucess } from '../../utils/toastsFunctions';
import {
  voteNegativeUpdateState,
  votePositiveUpdateState,
} from '../../utils/votesFunctions';
import { ContainerComments } from './postPage.styled';

const initialValue = {
  text: '',
};

export default function PostPage() {
  const toast = useToast();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);
  const [isMobile] = useMediaQuery('(max-width: 575.98px)');
  const [form, onChange, clearForm] = useForm(initialValue);
  const [isToUpdate, setIsToUpdate] = useState(false);
  const history = useHistory();
  useProtectedPage(history);

  useEffect(() => {
    (async () => {
      const result = await getPostDetails(id);

      if (result.status) {
        setComments(result.comments);
        setPost(result.post);
      } else {
        genericError(toast);
      }
      setIsToUpdate(false);
    })();
  }, [isToUpdate]);

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

  const onClickToComment = async () => {
    window.event.preventDefault();

    const body = { ...form };

    const result = await createComment(post.id, body);

    if (result.status) {
      createCommentSucess(toast);
      setIsToUpdate(true);
    } else {
      genericError(toast);
    }

    clearForm(initialValue);
  };

  const votePositiveComment = async (
    userVoteDirection,
    votesCount,
    idComment,
  ) => {
    votePositiveUpdateState(
      setComments,
      comments,
      userVoteDirection,
      votesCount,
      idComment,
    );

    if (userVoteDirection === 0)
      await voteComment(post.id, idComment, { direction: 1 });

    if (userVoteDirection === +1)
      await voteComment(post.id, idComment, { direction: 0 });
  };

  const voteNegativeComment = async (
    userVoteDirection,
    votesCount,
    idComment,
  ) => {
    voteNegativeUpdateState(
      setComments,
      comments,
      userVoteDirection,
      votesCount,
      idComment,
    );

    if (userVoteDirection === 0)
      await voteComment(post.id, idComment, { direction: -1 });

    if (userVoteDirection === -1)
      await voteComment(post.id, idComment, { direction: 0 });
  };

  return (
    <ContainerPage>
      <Header disableModal />
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

                  <form onSubmit={onClickToComment}>
                    <AccordionPanel
                      display="flex"
                      flexDir="column"
                      alignItems="center"
                    >
                      <Textarea
                        bg={palette.white}
                        required
                        name="text"
                        value={form.text}
                        onChange={onChange}
                        placeholder="Digite aqui"
                      />
                      <Button type="submit" mt="3">
                        Comentar
                      </Button>
                    </AccordionPanel>
                  </form>
                </AccordionItem>
              </Accordion>
            </ContainerComments>
            {comments.length > 0 &&
              comments.map((comment) => (
                <CommentCard
                  voteNegativeComment={voteNegativeComment}
                  votePositiveComment={votePositiveComment}
                  key={comment.id}
                  info={comment}
                />
              ))}
          </>
        )}
      </ContainerList>
    </ContainerPage>
  );
}
