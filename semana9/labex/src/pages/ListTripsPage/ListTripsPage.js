import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import TripsCard from '../../components/TripsCard/TripsCard';
import { gotToHomePage, gotToLoginPage } from '../../routers/coordinates';
import {
  CardsContainer,
  ContainerListTrips,
  MenuContainer,
} from './listTripsPage.styled';

export default function ListTripsPage() {
  const history = useHistory();
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerListTrips>
          <MenuContainer>
            <CustomButton onClick={() => gotToHomePage(history)} wd="100%">
              Home
            </CustomButton>
          </MenuContainer>
          <CardsContainer>
            <TripsCard />
            <TripsCard />
            <TripsCard />
            <TripsCard />
            <TripsCard />
            <TripsCard />
            <TripsCard />
            <TripsCard />
          </CardsContainer>
        </ContainerListTrips>
      </ContentContainer>
      <Footer hasButton clickButton={gotToLoginPage} history={history} />
    </PageContainer>
  );
}
