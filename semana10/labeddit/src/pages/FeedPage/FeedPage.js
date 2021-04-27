import { Spinner, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import getPosts from '../../services/getPosts';
import { alertError } from '../../utils/toastsFunctions';
import { ContainerFeed, ContainerFeedPage } from './feedPage.styled';

export default function FeedPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const toast = useToast();

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

  const postVote = (callback) => {
    const postsAfterVote = posts.map(callback);
    setPosts(postsAfterVote);
  };

  return (
    <ContainerFeedPage>
      <Header isToUpdate={setIsUpdate} />
      <ContainerFeed>
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
            <PostCard postVote={postVote} key={item.id} info={item} />
          ))}
      </ContainerFeed>
    </ContainerFeedPage>
  );
}
