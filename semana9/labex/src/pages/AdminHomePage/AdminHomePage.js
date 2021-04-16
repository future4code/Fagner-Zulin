import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import Footer from '../../components/Footer/Footer';
import { gotToHomePage } from '../../routers/coordinates';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import TripLine from '../../components/TripLine/TripLine';
import { ContainerAdminPage, ListContainer } from './adminHomePage.styled';
import tripsList from '../../services/tripsList';

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage(history);
  const [listTrips, setListTrips] = useState([]);
  const [aDelete, setADelete] = useState(false);

  useEffect(() => {
    (async () => {
      const { trips } = await tripsList();
      setListTrips(trips);
      setADelete(false);
    })();
  }, [aDelete]);

  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerAdminPage>
          <MenuContainer>
            <h1>Dashbord</h1>
            <CustomButton
              mg="10px 0"
              onClick={() => gotToHomePage(history)}
              wd="100%"
            >
              Home
            </CustomButton>
            <CustomButton mg="10px 0" wd="100%">
              Nova Viagem
            </CustomButton>
          </MenuContainer>
          <ListContainer>
            <SimpleGrid
              style={{ margin: '20px auto' }}
              columns={2}
              spacingX="90px"
              spacingY="30px"
            >
              {listTrips.map((trip) => (
                <TripLine whenDelete={setADelete} key={trip.id} trip={trip} />
              ))}
            </SimpleGrid>
          </ListContainer>
        </ContainerAdminPage>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
