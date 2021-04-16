import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import Footer from '../../components/Footer/Footer';
import { gotToHomePage } from '../../routers/coordinates';
import MenuContainer from '../../components/StyledComponentes/MenuContainer';
import CustomButton from '../../components/StyledComponentes/CustomButton';

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage(history);
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
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
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
