import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import CustomButton from '../../components/StyledComponentes/CustomButton';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import { gotToListTripPage, gotToLoginPage } from '../../routers/coordinates';
import planetsMovie from '../../video/planets.mp4';
import {
  ContainerHome,
  Text,
  TextContainer,
  VideoContainer,
  Videos,
} from './homePage.styled';

export default function HomePage() {
  const history = useHistory();
  return (
    <PageContainer>
      <Header />

      <ContentContainer>
        <ContainerHome>
          <TextContainer>
            <Text>
              Quer da um rolê na <strong>Lua</strong>? Quer fazer um tour em nos
              anéis de <strong>Saturno</strong>?
              <strong> Fazemos isso acontecer!</strong>
            </Text>

            <Text>Clique no botão e conheça nossos planos de viagem</Text>

            <CustomButton onClick={() => gotToListTripPage(history)}>
              Bora viajar
            </CustomButton>
          </TextContainer>

          <VideoContainer>
            <Videos preload="auto" muted autoPlay loop>
              <source src={planetsMovie} type="video/mp4" />
            </Videos>
          </VideoContainer>
        </ContainerHome>
      </ContentContainer>

      <Footer hasButton clickButton={gotToLoginPage} history={history} />
    </PageContainer>
  );
}
