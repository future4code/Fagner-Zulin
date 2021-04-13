import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import planetsMovie from '../../video/planets.mp4';
import {
  ButtonHome,
  ContainerHome,
  Text,
  TextContainer,
  VideoContainer,
  Videos,
} from './homePage.styled';

export default function HomePage() {
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

            <ButtonHome>Bora viajar</ButtonHome>
          </TextContainer>

          <VideoContainer>
            <Videos muted autoPlay loop>
              <source src={planetsMovie} type="video/mp4" />
            </Videos>
          </VideoContainer>
        </ContainerHome>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
