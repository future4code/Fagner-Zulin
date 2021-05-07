import {
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import ContainerList from '../../components/StyledComponents/ContainerList';
import ContainerPage from '../../components/StyledComponents/PageContainer';
import palette from '../../constants/paletteColors';
import useProtectedPage from '../../hooks/useProtectedPage ';
import getPosts from '../../services/getPosts';
import vote from '../../services/vote';
import orderByCreatedAt from '../../utils/orderByCreatedAt';
import { alertError } from '../../utils/toastsFunctions';
import {
  voteNegativeUpdateState,
  votePositiveUpdateState,
} from '../../utils/votesFunctions';
import ContainerInputFeed from './feedPage.styled';

export default function FeedPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const toast = useToast();
  const history = useHistory();
  useProtectedPage(history, toast);
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    (async () => {
      const result = await getPosts();

      if (result.status) {
        const ordPosts = orderByCreatedAt(result.posts);
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

  const onChangeSearchUser = (event) => setSearchUser(event.target.value);

  return (
    <ContainerPage>
      <Header isToUpdate={setIsUpdate} />
      <ContainerInputFeed>
        <InputGroup>
          <InputLeftAddon fontWeight="bold" color="white" bg={palette.darkBlue}>
            Autor:
          </InputLeftAddon>
          <Input
            onChange={onChangeSearchUser}
            value={searchUser}
            type="text"
            placeholder="Digite um nome de usuário"
          />
        </InputGroup>
      </ContainerInputFeed>
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
          posts
            .filter((item) => {
              if (searchUser !== '') {
                return item.username.includes(searchUser);
              }
              return true;
            })
            .map((item) => (
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
