import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import Footer from '../../components/Footer/Footer';
import { gotToHomePage } from '../../routers/coordinates';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import TripLine from '../../components/TripLine/TripLine';
import {
  ContainerAdminPage,
  ListContainer,
  Title,
} from './adminHomePage.styled';
import tripsList from '../../services/tripsList';
import CreateTripsModal from '../../components/CreateTripsModal/CreateTripsModal';
import logout from '../../utils/logout';
import SpinnerContainer from '../../components/StyledComponentes/SpinnerContainer';

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage(history);
  const [listTrips, setListTrips] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    (async () => {
      const { trips } = await tripsList();
      setListTrips(trips);
      setIsChange(false);
    })();
  }, [isChange]);

  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerAdminPage>
          <MenuContainer>
            <Title>Dashboard</Title>
            <CustomButton
              mg="10px 0"
              onClick={() => gotToHomePage(history)}
              wd="100%"
            >
              Home
            </CustomButton>
            <CreateTripsModal whenCreate={setIsChange} />
          </MenuContainer>
          <ListContainer>
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
            <SimpleGrid
              style={{ margin: '20px auto' }}
              columns={[1, 1, 1, 2]}
              spacingX="90px"
              spacingY="30px"
            >
              {listTrips.map((trip) => (
                <TripLine
                  history={history}
                  whenDelete={setIsChange}
                  key={trip.id}
                  trip={trip}
                />
              ))}
            </SimpleGrid>
          </ListContainer>
        </ContainerAdminPage>
      </ContentContainer>

      <Footer hasButton clickButton={logout} history={history} text="Logout" />
    </PageContainer>
  );
}
