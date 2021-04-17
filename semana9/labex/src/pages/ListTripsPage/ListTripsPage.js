import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import TripsCard from '../../components/TripsCard/TripsCard';
import { gotToHomePage, gotToLoginPage } from '../../routers/coordinates';
import tripsList from '../../services/tripsList';
import { CardsContainer, ContainerListTrips } from './listTripsPage.styled';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import SpinnerContainer from '../../components/StyledComponentes/SpinnerContainer';

export default function ListTripsPage() {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    (async () => {
      const { trips } = await tripsList();
      setListTrips(trips);
    })();
  }, []);

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
            {listTrips.length === 0 && (
              <SpinnerContainer>
                <Spinner
                  alignSelf="center"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="gray.500"
                  size="xl"
                />
              </SpinnerContainer>
            )}
            {listTrips.map((trip) => (
              <TripsCard key={trip.id} trip={trip} />
            ))}
          </CardsContainer>
        </ContainerListTrips>
      </ContentContainer>
      <Footer hasButton clickButton={gotToLoginPage} history={history} />
    </PageContainer>
  );
}
