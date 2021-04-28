import React from 'react';
import Header from '../../components/Header/Header';
import ContainerList from '../../components/StyledComponents/ContainerList';
import ContainerPage from '../../components/StyledComponents/PageContainer';

export default function PostPage() {
  return (
    <ContainerPage>
      <Header />
      <ContainerList />
    </ContainerPage>
  );
}
