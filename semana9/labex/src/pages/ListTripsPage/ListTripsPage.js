import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import { gotToLoginPage } from '../../routers/coordinates';
import { ContainerListTrips, MenuContainer } from './listTripsPage.styled';

export default function ListTripsPage() {
  const history = useHistory();
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerListTrips>
          <MenuContainer />
        </ContainerListTrips>
      </ContentContainer>
      <Footer hasButton clickButton={gotToLoginPage} history={history} />
    </PageContainer>
  );
}
