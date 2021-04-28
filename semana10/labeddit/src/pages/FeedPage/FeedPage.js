import { Spinner, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import ContainerList from '../../components/StyledComponents/ContainerList';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import useProtectedPage from '../../hooks/useProtectedPage ';
import getPosts from '../../services/getPosts';
import vote from '../../services/vote';
import { alertError } from '../../utils/toastsFunctions';
import {
  voteNegativeUpdateState,
  votePositiveUpdateState,
} from '../../utils/votesFunctions';

export default function FeedPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const toast = useToast();
  const history = useHistory();
  useProtectedPage(history);

  useEffect(() => {
    (async () => {
      const result = await getPosts();

      if (result.status) {
        const ordPosts = result.posts.sort(
          (postA, postB) => postB.createdAt - postA.createdAt,
        );
        setPosts(ordPosts);
      } else {
        alertError(toast, result.message);
      }
      setIsUpdate(false);
    })();
  }, [isUpdate]);

  const votePositive = async (userVoteDirection, votesCount, id) => {
    votePositiveUpdateState(setPosts, posts, userVoteDirection, votesCount, id);

    if (userVoteDirection === 0) await vote(id, { direction: 1 });

    if (userVoteDirection === +1) await vote(id, { direction: 0 });
  };

  const voteNegative = async (userVoteDirection, votesCount, id) => {
    voteNegativeUpdateState(setPosts, posts, userVoteDirection, votesCount, id);

    if (userVoteDirection === 0) await vote(id, { direction: -1 });

    if (userVoteDirection === -1) await vote(id, { direction: 0 });
  };

  return (
    <ContainerPage>
      <Header isToUpdate={setIsUpdate} />
      <ContainerList>
        {posts.length === 0 && (
          <Spinner
            alignSelf="center"
            thickness="4px"
            speed="0.65s"
            emptyColor="blue.200"
            color="blue.500"
            size="xl"
          />
        )}
        {posts.length >= 0 &&
          posts.map((item) => (
            <PostCard
              voteNegative={voteNegative}
              votePositive={votePositive}
              key={item.id}
              info={item}
            />
          ))}
      </ContainerList>
    </ContainerPage>
  );
}
