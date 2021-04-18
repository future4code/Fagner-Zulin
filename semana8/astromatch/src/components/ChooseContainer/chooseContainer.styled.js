import styled from "styled-components";

export const BoxContainer = styled.section`
  background-color: white;
  width: 320px;
  height: 500px;
  border: 2px solid #5c1428;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Love Ya Like A Sister", cursive;
  text-align: center;
  color: white;
  font-size: 2em;
`;

export const HeaderContainer = styled.header`
  padding: 5px;
  background-color: #420736;
  width: 100.4%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContainer = styled.div``;

export const FooterContainer = styled.footer`
  background-color: #420736;
  width: 100.4%;
  height: 100px;
  margin-bottom: -1px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top: 2px solid #5c1428;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
