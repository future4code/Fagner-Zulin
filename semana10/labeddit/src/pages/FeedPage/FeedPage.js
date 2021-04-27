import React from 'react';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { ContainerFeed, ContainerFeedPage } from './feedPage.styled';

export default function FeedPage() {
  return (
    <ContainerFeedPage>
      <Header />
      <ContainerFeed>
        <PostCard />
      </ContainerFeed>
    </ContainerFeedPage>
  );
}
