import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import {
  ApplicationsContainer,
  CandidatesContainer,
  ContainerTripDetailsPage,
  Label,
  TitlePlanet,
  TripDetailsContainer,
} from './tripDetailsPage.styled';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import tripsList from '../../services/tripsList';
import CustomButton from '../../components/StyledComponentes/CustomButton';

export default function TripDetailsPage() {
  const { id } = useParams();
  const history = useHistory();
  useProtectedPage(history);
  const [trip, setTrip] = useState({});

  useEffect(() => {
    (async () => {
      const { trips } = await tripsList();
      const tripData = trips.filter((item) => item.id === id);
      setTrip(tripData[0]);
    })();
  }, []);

  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerTripDetailsPage>
          <MenuContainer jc="space-between">
            <TitlePlanet>{trip.planet}</TitlePlanet>
            <TripDetailsContainer>
              <h2>
                <Label>Nome: </Label>
                {trip.name}
              </h2>
              <p>
                <Label>Descrição: </Label> {trip.description}
              </p>
              <p>
                <Label>Duração: </Label> {trip.durationInDays}
              </p>
              <p>
                <Label>Data de Partida: </Label> {trip.date}
              </p>
            </TripDetailsContainer>
            <CustomButton onClick={history.goBack}>Voltar</CustomButton>
          </MenuContainer>
          <ApplicationsContainer>
            <CandidatesContainer>
              <h1>Candidaturas Pendentes</h1>
            </CandidatesContainer>
            <Divider orientation="vertical" />
            <CandidatesContainer>
              <h1>Candidaturas Aprovadas</h1>
            </CandidatesContainer>
          </ApplicationsContainer>
        </ContainerTripDetailsPage>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
