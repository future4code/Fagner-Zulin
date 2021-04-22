import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ListItem, Spinner, UnorderedList } from '@chakra-ui/react';

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
  SubTitle,
  TitlePlanet,
  TripDetailsContainer,
} from './tripDetailsPage.styled';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import CandidateCard from '../../components/CandidateCard/CandidateCard';
import tripDetail from '../../services/tripDetail';
import logout from '../../utils/logout';
import SpinnerContainer from '../../components/StyledComponentes/SpinnerContainer';

export default function TripDetailsPage() {
  const { id } = useParams();
  const history = useHistory();
  useProtectedPage(history);
  const [isChange, setIsChange] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await tripDetail(id);

      if (result.code === 200) {
        setDetails(result.trip);
        setIsChange(false);
      }
    })();
  }, [isChange]);

  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerTripDetailsPage>
          {details === null && (
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
          {details && (
            <MenuContainer jc="space-between">
              <TitlePlanet>{details.planet}</TitlePlanet>
              <TripDetailsContainer>
                <h2>
                  <Label>Nome: </Label>
                  {details.name}
                </h2>
                <p>
                  <Label>Descrição: </Label> {details.description}
                </p>
                <p>
                  <Label>Duração: </Label> {details.durationInDays} dias
                </p>
                <p>
                  <Label>Data de Partida: </Label> {details.date}
                </p>
              </TripDetailsContainer>
              <CustomButton onClick={history.goBack}>Voltar</CustomButton>
            </MenuContainer>
          )}

          {details && (
            <ApplicationsContainer>
              <CandidatesContainer br="1px solid white">
                <SubTitle>Candidaturas Pendentes</SubTitle>
                {details.candidates !== undefined &&
                  ((details.candidates.length === 0 && (
                    <Label>Sem candidatos por enquanto</Label>
                  )) ||
                    details.candidates.map((candidate) => (
                      <CandidateCard
                        tripId={details.id}
                        key={candidate.id}
                        whenDecide={setIsChange}
                        candidate={candidate}
                      />
                    )))}
              </CandidatesContainer>
              <CandidatesContainer bl="1px solid white">
                <SubTitle>Candidaturas Aprovadas</SubTitle>
                {details.approved !== undefined &&
                  ((details.approved.length === 0 && (
                    <Label>Nenhum Candidato foi aprovado ainda</Label>
                  )) || (
                    <UnorderedList spacing="3">
                      {details.approved.map((item) => (
                        <ListItem key={item.id}>{item.name}</ListItem>
                      ))}
                    </UnorderedList>
                  ))}
              </CandidatesContainer>
            </ApplicationsContainer>
          )}
        </ContainerTripDetailsPage>
      </ContentContainer>

      <Footer hasButton clickButton={logout} history={history} text="Logout" />
    </PageContainer>
  );
}
