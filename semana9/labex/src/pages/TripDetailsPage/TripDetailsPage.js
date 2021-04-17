import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';

export default function TripDetailsPage() {
  const { id } = useParams();
  const history = useHistory();
  useProtectedPage(history);
  console.log(id);
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer />

      <Footer />
    </PageContainer>
  );
}
