import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContentContainer from '../../components/StyledComponentes/ContentContainer.styled';
import PageContainer from '../../components/StyledComponentes/PageContainer.styled';

const ContainerLogin = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const FormLoginContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LoginPage() {
  return (
    <PageContainer background="#000">
      <Header />
      <ContentContainer>
        <ContainerLogin>
          <FormLoginContainer>
            <h2>Login</h2>
          </FormLoginContainer>
        </ContainerLogin>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
